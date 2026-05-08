<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('packages', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->unsignedInteger('download_kbps');
            $table->unsignedInteger('upload_kbps');
            $table->decimal('price', 10, 2);
            $table->unsignedInteger('validity_days')->default(30);
            $table->string('radius_group')->unique();
            $table->json('radius_attributes')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('packages');
    }
};
