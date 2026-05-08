<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('pppoe_clients', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('username')->unique();
            $table->string('password');
            $table->string('phone')->nullable();
            $table->text('address')->nullable();
            $table->foreignId('package_id')->constrained('packages');
            $table->date('expiry_date');
            $table->enum('status', ['active', 'disabled', 'expired'])->default('active');
            $table->text('comment')->nullable();
            $table->timestamps();
            $table->index(['status', 'expiry_date']);
        });
    }

    public function down(): void {
        Schema::dropIfExists('pppoe_clients');
    }
};
