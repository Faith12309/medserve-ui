<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('medicine_batches', function (Blueprint $table) {

            $table->id();

            // Temporary medicine ID
            $table->integer('medicine_id');

            // Batch info
            $table->string('batch_number');

            // Dates
            $table->date('date_received');
            $table->date('expiration_date');

            // Quantities
            $table->integer('quantity_received');
            $table->integer('quantity_remaining');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('medicine_batches');
    }
};