<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\PackageController;
use App\Http\Controllers\Api\PppoeClientController;
use App\Http\Controllers\Api\NasDeviceController;
use App\Http\Controllers\Api\RenewalController;
use App\Http\Controllers\Api\PaymentController;
use App\Http\Controllers\Api\OnlineSessionController;

Route::post('/auth/login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::apiResource('/packages', PackageController::class);
    Route::apiResource('/clients', PppoeClientController::class);
    Route::post('/clients/{client}/renew', [RenewalController::class, 'store']);
    Route::post('/clients/{client}/disable', [PppoeClientController::class, 'disable']);

    Route::apiResource('/nas-devices', NasDeviceController::class);
    Route::apiResource('/payments', PaymentController::class)->only(['index', 'store', 'show']);
    Route::get('/online-sessions', [OnlineSessionController::class, 'index']);
});
