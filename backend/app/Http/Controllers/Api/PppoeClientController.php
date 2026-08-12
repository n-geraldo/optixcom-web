<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PppoeClient;
use App\Services\RadiusSyncService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PppoeClientController extends Controller
{
    public function __construct(private RadiusSyncService $radiusSyncService) {}

    public function index()
    {
        return PppoeClient::with('package')->latest()->paginate(25);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'full_name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:64', 'unique:pppoe_clients,username'],
            'password' => ['required', 'string', 'min:6', 'max:72'],
            'package_id' => ['required', 'exists:packages,id'],
            'expiry_date' => ['required', 'date'],
            'phone' => ['nullable', 'string', 'max:30'],
            'address' => ['nullable', 'string'],
            'comment' => ['nullable', 'string'],
        ]);

        $client = PppoeClient::create([
            ...$validated,
            'password' => encrypt($validated['password']),
            'status' => 'active',
        ]);

        $this->radiusSyncService->syncClient($client, $validated['password']);

        return response()->json($client->load('package'), 201);
    }

    public function disable(PppoeClient $client)
    {
        $client->update(['status' => 'disabled']);
        $this->radiusSyncService->disableClient($client->username);
        return response()->json(['message' => 'Client disabled']);
    }
}
