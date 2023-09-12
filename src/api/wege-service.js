import API from "@/utils/api"

const getMenuHeader = () => {
    return API.get("/api/getMenuHeader")
}

const getLatestNews = (limit) => {
    return API.post("/api/getLatestNews", {
        limit: limit
    })
}

const getBanner = () => {
    return API.get("/api/getBanner")
}

const getMemberOfWika = () => {
    return API.get("/api/getMemberOfWika")
}

const getSustainability = () => {
    return API.get("/api/getSustainability")
}

const getContact = () => {
    return API.get("/api/getContact")
}

const getHomepageData = () => {
    return API.get("/api/getHomepageData")
}

const getNewsContentByAlias = (alias) => {
    return API.post("api/getNewsContentByAlias", {
        alias: alias
    })
}

const getMenuContentByAlias = (alias) => {
    return API.post("api/getMenuContentByAlias", {
        alias: alias
    })
}

const getTimelinePerusahaan = () => {
    return API.get("/api/getTimelinePerusahaan")
}

const getListSertikasiDanPenghargaan = (tipe) => {
    return API.post("/api/getListSertikasiDanPenghargaan", {
        tipe: tipe
    })
}

const getListOrganisasi = (tipe) => {
    return API.post("/api/getListOrganisasi", {
        tipe: tipe
    })
}

const getListAlamatDanKontak = (tipe) => {
    return API.post("/api/getListAlamatDanKontak", {
        tipe: tipe
    })
}
export {
    getListAlamatDanKontak,
    getListOrganisasi,
    getTimelinePerusahaan,
    getMenuContentByAlias,
    getMenuHeader, getBanner,
    getLatestNews, getSustainability, getContact, getMemberOfWika, getHomepageData,
    getNewsContentByAlias,
    getListSertikasiDanPenghargaan
}