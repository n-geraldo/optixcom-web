<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('packages')->insert([
            [
                'name' => 'Home 20M',
                'download_kbps' => 20000,
                'upload_kbps' => 5000,
                'price' => 1500,
                'validity_days' => 30,
                'radius_group' => 'pkg_home_20m',
                'radius_attributes' => json_encode([
                    'Mikrotik-Rate-Limit' => '20M/5M',
                    'Acct-Interim-Interval' => '300',
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        DB::table('radgroupreply')->insert([
            [
                'groupname' => 'pkg_home_20m',
                'attribute' => 'Mikrotik-Rate-Limit',
                'op' => '=',
                'value' => '20M/5M',
            ],
            [
                'groupname' => 'pkg_home_20m',
                'attribute' => 'Acct-Interim-Interval',
                'op' => '=',
                'value' => '300',
            ],
        ]);
    }
}
