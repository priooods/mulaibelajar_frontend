import store from "../store";
const allsma = store.state.pelajaran.pelajaran.filter((el) => {
  return el.kelas ? el.kelas.tgkt === "SMA" : null;
});
const allsd = store.state.pelajaran.pelajaran.filter((el) => {
  return el.kelas ? el.kelas.tgkt === "SD" : null;
});
const allsmp = store.state.pelajaran.pelajaran.filter((el) => {
  return el.kelas ? el.kelas.tgkt === "SMP" : null;
});
const smp1 = store.state.pelajaran.pelajaran.filter((el) => {
  return el.kelas.tgkt === "SMP" && el.kelas.kls == 1;
});
const smp2 = store.state.pelajaran.pelajaran.filter((el) => {
  return el.kelas.tgkt === "SMP" && el.kelas.kls == 2;
});
const smp3 = store.state.pelajaran.pelajaran.filter((el) => {
  return el.kelas.tgkt === "SMP" && el.kelas.kls == 3;
});
const sma1 = store.state.pelajaran.pelajaran.filter((el) => {
  return el.kelas.tgkt === "SMA" && el.kelas.kls == 1;
});
const sma2 = store.state.pelajaran.pelajaran.filter((el) => {
  return el.kelas.tgkt === "SMA" && el.kelas.kls == 2;
});
const sma3 = store.state.pelajaran.pelajaran.filter((el) => {
  return el.kelas.tgkt === "SMA" && el.kelas.kls == 3;
});
const sd5 = store.state.pelajaran.pelajaran.filter((el) => {
  return el.kelas.tgkt === "SD" && el.kelas.kls == 5;
});
const sd6 = store.state.pelajaran.pelajaran.filter((el) => {
  return el.kelas.tgkt === "SD" && el.kelas.kls == 6;
});
export default {
  data() {
    return {
      active: 0,
      listkelas: [
        { active: 0, name: "Semua" },
        { active: 1, name: "SD" },
        { active: 2, name: "SMP" },
        { active: 3, name: "SMA" },
        // { active: 4, name: "Intensif" },
      ],
      pelajaranall: [
        {
          title: "Kelas Sekolah Dasar",
          listPelajaran: allsd,
        },
        {
          title: "Kelas Sekolah Menengah Pertama",
          listPelajaran: allsmp,
        },
        {
          title: "Kelas Sekolah Menengah Atas",
          listPelajaran: allsma,
        },
      ],
      all: [
        {
          title: "Kelas Sekolah Dasar",
          listPelajaran: allsd,
        },
        {
          title: "Kelas Sekolah Menengah Pertama",
          listPelajaran: allsmp,
        },
        {
          title: "Kelas Sekolah Menengah Atas",
          listPelajaran: allsma,
        },
      ],
      smplist: [
        {
          title: "Kelas 1 SMP",
          listPelajaran: smp1,
        },
        {
          title: "Kelas 2 SMP",
          listPelajaran: smp2,
        },
        {
          title: "Kelas 3 SMP",
          listPelajaran: smp3,
        },
      ],
      smalist: [
        {
          title: "Kelas 1 SMA",
          listPelajaran: sma1,
        },
        {
          title: "Kelas 2 SMA",
          listPelajaran: sma2,
        },
        {
          title: "Kelas 3 SMA",
          listPelajaran: sma3,
        },
      ],
      sdlist: [
        {
          title: "Kelas 5 SD",
          listPelajaran: sd5,
        },
        {
          title: "Kelas 6 SD",
          listPelajaran: sd6,
        },
      ],
    };
  },
  methods: {
    changetab(tab) {
      switch (tab) {
        case 0:
          this.pelajaranall = this.all;
          break;
        case 1:
          this.pelajaranall = this.sdlist;
          break;
        case 2:
          this.pelajaranall = this.smplist;
          break;
        case 3:
          this.pelajaranall = this.smalist;
          break;
      }
      this.active = tab;
    },
  },
};
