<template>
  <div>
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h4 class="card-title">Edit Data</h4>
        <form ref="form" enctype="multipart/form-data">
          <b-row>
            <b-col>
              <b-form-group label="Nama Sekolah" label-for="nama_sekolah">
                <input
                  id="nama_sekolah"
                  v-model="form.nama_sekolah"
                  type="text"
                  :class="'form-control'"
                  autofocus
                />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Visi" label-for="visi">
                <input
                  id="visi"
                  v-model="form.visi"
                  type="text"
                  :class="'form-control'"
                />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Misi" label-for="misi">
                <input
                  id="misi"
                  v-model="form.misi"
                  type="text"
                  :class="'form-control'"
                />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group label="Alamat" label-for="alamat">
                <b-form-textarea
                  id="alamat"
                  v-model="form.alamat"
                  placeholder="Alamat Sekolah"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group label="Email" label-for="email">
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  :class="'form-control'"
                />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Website" label-for="website">
                <input
                  id="website"
                  v-model="form.website"
                  type="text"
                  :class="'form-control'"
                />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="No. Tlp" label-for="no_tlp">
                <input
                  id="no_tlp"
                  v-model="form.no_tlp"
                  type="text"
                  :class="'form-control'"
                />
              </b-form-group>
            </b-col>
          </b-row>
          <b-button variant="outline-primary" size="sm" @click="update"
            >Update</b-button
          >
        </form>
        <h6 class="card-subtitle font-weight-normal text-muted"></h6>
      </b-card-body>
    </b-card>
  </div>
</template>
<script>
export default {
  props: ["id_data"],
  data() {
    return {
      form: {
        nama_sekolah: null,
        visi: null,
        misi: null,
        alamat: null,
        email: null,
        website: null,
        no_tlp: null,
      },
    };
  },
  methods: {
    update() {
      this.$emit("updateData", { id: this.id_data, form: { ...this.form } });
    },
    loadProfile() {
      this.$store
        .dispatch("profile/profile", this.id_data)
        .then((result) => {
          this.form.nama_sekolah = result.nama_sekolah;
          this.form.visi = result.visi;
          this.form.misi = result.misi;
          this.form.alamat = result.alamat;
          this.form.email = result.email;
          this.form.website = result.website;
          this.form.no_tlp = result.no_tlp;
          console.log("profile:", result);
        })
        .catch((e) => console.log(e));
    },
  },
  beforeMount() {
    this.loadProfile();
  },
  components: {
    //
  },
};
</script>
