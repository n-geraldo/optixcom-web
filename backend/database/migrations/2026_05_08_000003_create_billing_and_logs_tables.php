<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pppoe_client_id')->constrained('pppoe_clients');
            $table->decimal('amount', 10, 2);
            $table->string('method')->default('cash');
            $table->string('reference')->nullable();
            $table->timestamp('paid_at');
            $table->timestamps();
        });

        Schema::create('renewals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pppoe_client_id')->constrained('pppoe_clients');
            $table->foreignId('package_id')->constrained('packages');
            $table->unsignedInteger('days_added');
            $table->date('old_expiry_date');
            $table->date('new_expiry_date');
            $table->foreignId('performed_by')->constrained('users');
            $table->timestamps();
        });

        Schema::create('nas_devices', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('ip_address')->unique();
            $table->string('secret_encrypted');
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('activity_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained('users');
            $table->string('action');
            $table->string('subject_type')->nullable();
            $table->unsignedBigInteger('subject_id')->nullable();
            $table->json('meta')->nullable();
            $table->ipAddress('ip')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('activity_logs');
        Schema::dropIfExists('nas_devices');
        Schema::dropIfExists('renewals');
        Schema::dropIfExists('payments');
    }
};
