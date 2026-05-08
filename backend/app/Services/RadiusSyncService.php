<?php

namespace App\Services;

use App\Models\PppoeClient;
use Illuminate\Support\Facades\DB;

class RadiusSyncService
{
    public function syncClient(PppoeClient $client, string $plainPassword): void
    {
        DB::table('radcheck')->where('username', $client->username)->delete();
        DB::table('radcheck')->insert([
            'username' => $client->username,
            'attribute' => 'Cleartext-Password',
            'op' => ':=',
            'value' => $plainPassword,
        ]);

        DB::table('radusergroup')->updateOrInsert(
            ['username' => $client->username],
            ['groupname' => $client->package->radius_group, 'priority' => 1]
        );
    }

    public function disableClient(string $username): void
    {
        DB::table('radcheck')->updateOrInsert(
            ['username' => $username, 'attribute' => 'Auth-Type'],
            ['op' => ':=', 'value' => 'Reject']
        );
    }
}
