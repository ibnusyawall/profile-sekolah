<template>
  <div>
    <!-- ini bagian navbar -->
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style="background-color: #1eaaf1"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">{{ data.nama_sekolah }}</a>

        <b-collapse id="nav-collapse" is-nav class="">
          <!-- -----------------------------------------------------------
          Right aligned nav items
        ----------------------------------------------------------- -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right no-caret>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <span class="navbar-toggler-icon"></span>
              </template>
              <b-dropdown-item
                to="/dashboard"
                v-if="user"
                class="d-flex align-items-center"
              >
                Dashboard
              </b-dropdown-item>
              <b-dropdown-item
                to="/login"
                v-else
                class="d-flex align-items-center"
              >
                Login
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </nav>
    <!-- container menggunakan grid -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm bg-white">
          <div class="media-body p-4 mt-2 text-center">
            <h4 class="heading">VISI dan MISI SEKOLAH</h4>
            <img src="asset/image/icon/LOGO-SMA.png" alt="" /><br /><br />
            <div class="container mt-3">
              <div class="d-flex justify-content-center mb-3">
                <div class="p-2">
                  <h4 class="heading text-info">
                    Visi {{ data.nama_sekolah }}
                  </h4>
                  <p>“ {{ data.visi }} ”</p>
                </div>
              </div>
              <div class="d-flex justify-content-center mb-3">
                <div class="p-2">
                  <h4 class="heading text-info">
                    Misi {{ data.nama_sekolah }}
                  </h4>
                  <p>“ {{ data.misi }} ”</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm bg-light">
          <div class="media-body p-4 mt-2 text-center">
            <h4 class="heading">{{ data.nama_sekolah }}</h4>
            <!-- container menggunakan grid -->
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm" style="background-color: #1eaaf1">
                  <div class="media-body p-4 mt-2 text-center text-light">
                    <img
                      src="https://raw.githubusercontent.com/wahyupambudi/simple-school-web/master/asset/image/icon/guru.png"
                      class="rounded"
                      alt="..."
                      style="width: 100px; height: 100px"
                    />
                    <h4 class="heading">Guru Profesional</h4>
                    <p>
                      Guru yang mampu mendidik anak muridnya menjadi generasi
                      yang mampu bersaing dan memiliki moral yang baik.
                    </p>
                  </div>
                </div>
                <div class="col-sm" style="background-color: #8cc152">
                  <div class="media-body p-4 mt-2 text-center text-light">
                    <img
                      src="https://raw.githubusercontent.com/wahyupambudi/simple-school-web/master/asset/image/icon/belajar.png"
                      class="rounded"
                      alt="..."
                      style="width: 100px; height: 100px"
                    />
                    <h4 class="heading">Pembelajaran Khusus</h4>
                    <p>
                      Penerapan secara khusus suatu metode pembelajaran yang
                      telah disesuaikan dengan kemampuan dan kebiasaan siswa.
                    </p>
                  </div>
                </div>
                <div class="col-sm" style="background-color: #5d50c6">
                  <div class="media-body p-4 mt-2 text-center text-light">
                    <img
                      src="https://raw.githubusercontent.com/wahyupambudi/simple-school-web/master/asset/image/icon/Buku.png"
                      class="rounded"
                      alt="..."
                      style="width: 100px; height: 100px"
                    />
                    <h4 class="heading">Buku & Perpustakaan</h4>
                    <p>
                      Buku merupakan bentuk cetakan yang tidak bisa dijauhkan
                      dari aktivitas belajar mengajar.
                    </p>
                  </div>
                </div>
                <div class="col-sm" style="background-color: #f1453d">
                  <div class="media-body p-4 mt-2 text-center text-light">
                    <img
                      src="https://raw.githubusercontent.com/wahyupambudi/simple-school-web/master/asset/image/icon/Akreditasi.png"
                      class="rounded"
                      alt="..."
                      style="width: 100px; height: 100px"
                    />
                    <h4 class="heading">Akreditasi</h4>
                    <p>
                      Terakreditasi A oleh BAN-SM. Suatu bentuk pengakuan
                      pemerintah terhadap lembaga pendidikan negeri dan swasta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm" style="background-color: #1e45f1">
          <div class="media-body p-4 mt-2 text-center text-light">
            <h4 class="heading">Alamat</h4>
            <p>
              {{ data.alamat }}
            </p>
          </div>
        </div>
        <div class="col-sm" style="background-color: #8cc152">
          <div class="media-body p-4 mt-2 text-center text-light">
            <h4 class="heading">Nomor Telp</h4>
            <p>{{ data.no_tlp }}</p>
          </div>
        </div>
        <div class="col-sm" style="background-color: #5d50c6">
          <div class="media-body p-4 mt-2 text-center text-light">
            <h4 class="heading">Email Sekolah</h4>
            <p>{{ data.email }}</p>
          </div>
        </div>
        <div class="col-sm" style="background-color: #f1453d">
          <div class="media-body p-4 mt-2 text-center text-light">
            <h4 class="heading">Website</h4>
            <p>{{ data.website }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- grid footer -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm" style="background-color: #1eaaf1">
          <div class="media-body p-4 mt-2 text-center text-light">
            <p>{{ data.nama_sekolah }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        nama_sekolah: null,
        visi: null,
        misi: null,
        alamat: null,
        email: null,
        website: null,
        no_tlp: null,
      },
      id_data: 1,
    };
  },
  methods: {
    loadProfile() {
      this.$store
        .dispatch("profile/public", this.id_data)
        .then((result) => {
          this.data.nama_sekolah = result.nama_sekolah;
          this.data.visi = result.visi;
          this.data.misi = result.misi;
          this.data.alamat = result.alamat;
          this.data.email = result.email;
          this.data.website = result.website;
          this.data.no_tlp = result.no_tlp;

          console.log("profile:", result);
        })
        .catch((e) => console.log(e));
    },
  },
  beforeMount() {
    this.loadProfile();
  },
  computed: {
    user: function () {
      return JSON.parse(localStorage.getItem("user")) || null;
    },
  },
};
</script>
