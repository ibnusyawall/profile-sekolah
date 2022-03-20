<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class Install extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Installer';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->line('=========  Application Details =========');
        $this->line('[#] Application Name: PROFILE SEKOLAH');
        $this->line('[#] Application Description: Aplikasi Pengelola Informasi Profile Sekolah Berbasis Web');
        $this->line('[#] Author: ibnusyawall');
        $this->line('=========  Application Details =========');
        $this->line('');
        $this->line('Optimizing..');
        $this->callSilent('optimize');
        $this->line('');

        $this->line('[+] Setup Database ...');
        $this->callSilent('migrate:fresh', [
            '--seed' => true,
        ]);

        $this->line('[+] Setup Laravel Passport ...');
        $this->callSilent('passport:install', [
            '--force' => true,
        ]);
        $this->callSilent('passport:client', [
            '--personal' => true,
            '--name' => 'profile_sekolah',
        ]);

        $this->line('[!] Finishing..');
        $this->callSilent('optimize');

        $this->info('[*] Finished!');
    }
}
