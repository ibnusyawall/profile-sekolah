<template>
  <div>
    <template v-if="user">
        <ProfileEdit :id_data="id_data" @updateData="updateData" />
    </template>
    <template v-else>
        <p>Unauthorized.</p>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProfileEdit from "./components/ProfileEdit.vue";

export default {
  data() {
    return {
        id_data: 1
    };
  },

  methods: {
    updateData({ id, form }) {
      console.log("edit formL:", form);

      axios
        .put(`/api/v1/profile/${id}`, form)
        .then((result) => {
          console.log("updated success", result);
          this.modalConfirm(
            "Konfirmasi",
            "Data berhasil di update",
            "success",
            true
          );
        })
        .catch((e) => {
          this.modalConfirm(
            "Konfirmasi",
            "Data gagal di update",
            "danger",
            false
          );
          console.log("error:", e);
        });
    },
    modalConfirm(title, msg, type, go = false) {
      this.$bvModal
        .msgBoxOk(msg, {
          title: title,
          size: "md",
          buttonSize: "md",
          okVariant: type,
          headerClass: "p-2 border-bottom-0",
          footerClass: "p-2 border-top-0",
          centered: true,
        })
        .then((value) => {
          if (go) {
            this.$router.go(0);
          }
        })
        .catch((err) => {
          // An error occurred
        });
    },
  },
  computed: {
    ...mapState({
      login_success: (state) => state.login_success,
      user: (state) => state.user,
    }),
    user: function () {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  mounted() {
      if (!this.user) {
          window.href = '/'
      }
  },
  components: {
    ProfileEdit,
  },
};
</script>
