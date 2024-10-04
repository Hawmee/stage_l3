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
        Schema::create('intern_ships', function (Blueprint $table) {
            $table->id();
            $table->foreignId('intern_id')->constrained('interns')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
            $table->foreignId('unit_id')->constrained('units')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
            $table->string('theme');
            $table->string('book_link')->nullable();
            $table->foreignId('performance_id')->nullable()
                ->constrained('performances')
                    ->cascadeOnDelete()
                    ->cascadeOnUpdate();
            $table->boolean('status')->default(false);
            $table->date('start_date');
            $table->date('end_date');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('intern_ships');
    }
};
