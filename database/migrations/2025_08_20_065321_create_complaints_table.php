<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('complaints', function (Blueprint $table) {
            $table->id();
            $table->string('resident_name', 100);
            $table->string('resident_email', 100);
            $table->enum('category', ['plumbing', 'electricity', 'cleaning', 'security']);
            $table->text('description');
            $table->string('location', 100);
            $table->string('photo_url', 255);
            $table->string('selfie_url', 255);
            $table->enum('status', ['open', 'in_progress', 'closed'])->default('open');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('complaints');
    }
};
