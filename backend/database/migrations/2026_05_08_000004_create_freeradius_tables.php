<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration {
    public function up(): void {
        DB::unprepared(file_get_contents(database_path('schema/freeradius.sql')));
    }

    public function down(): void {
        DB::unprepared('DROP TABLE IF EXISTS radpostauth, radacct, radgroupcheck, radgroupreply, radreply, radcheck, radusergroup, nas;');
    }
};
