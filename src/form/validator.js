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
        nhp: [
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
        flnm: [
          {
            required: true,
            message: "nama lengkap required",
            trigger: "blur",
          },
        ],
        eml: [
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
        lvl: [
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
