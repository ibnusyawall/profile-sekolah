<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class ProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $profile = [
            'nama_sekolah' => 'SMKN 1 PADAHERANG',
            'visi' => 'Menjadi SMK unggul yang menghasilkan lulusan berdaya saing global.',
            'misi' => 'Mewujudkan sumber daya manusia unggul melalui proses yang PROAKTIF (Profesional, Agamnis, Kompetitif, Tanggung Jawab dan Inovatif).
            Menerapkan sistem manajemen sekolah yang transparan dan akuntabel sesuai dengan regulasi yang berlaku.
            Menjalin kemitraan yang berkualitas dan berkelanjutan dengan dunia kerja.
            Memenuhi sarana dan prasarana yang sesuai dengan standar industri.',
            'alamat' => 'Jl. Raya Padaherang KM. 01 Desa Karangsari Kec. Padaherang
            Kabupaten Pangandaran',
            'email' => 'info@smkn1padaherang.sch.id',
            'website' => 'https://smkn1padaherang.sch.id/',
            'no_tlp' => '(0265) 655621'
        ];

        DB::table('profiles')->insert($profile);
    }
}
