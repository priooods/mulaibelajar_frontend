export default {
  data() {
    return {
      validatorregister: {
        username: [
          {
            required: true,
            message: "username required",
            trigger: "blur",
          },
        ],
        no_hp: [
          {
            required: true,
            type: "string",
            message: "no handphone required",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "password required",
            trigger: "blur",
          },
        ],
        nama_lengkap: [
          {
            required: true,
            message: "nama lengkap required",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "email required",
            trigger: "blur",
          },
          {
            type: "email",
            message: "email tidak valid",
            trigger: "blur",
          },
        ],
        level: [
          {
            required: true,
            message: "pendidikan required",
            trigger: "change",
          },
        ],
      },
    };
  },
};
