import API from "@/utils/api"

const getMenuHeader = () => {
    return API("/api/getMenuHeader")
}

const getLatestNews = (limit) => {
    return API("/api/getLatestNews", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: limit ? `limit=${limit}` : ""
    })
}

const getBanner = () => {
    return API("/api/getBanner")
}

const getMemberOfWika = () => {
    return API("/api/getMemberOfWika")
}

const getSustainability = () => {
    return API("/api/getSustainability")
}

const getContact = () => {
    return API("/api/getContact")
}

const getHomepageData = () => {
    return API("/api/getHomepageData")
}

const getNewsContentByAlias = (alias) => {
    return API("/api/getNewsContentByAlias", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            // Add any other headers if needed
        },
        body: alias ? `alias=${alias}` : ""
    })
}

const getMenuContentByAlias = (alias) => {
    return API("/api/getMenuContentByAlias", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            // Add any other headers if needed
        },
        body: alias ? `alias=${alias}` : ""
    })
}

const getTimelinePerusahaan = () => {
    return API("/api/getTimelinePerusahaan")
}

const getListSertikasiDanPenghargaan = (tipe) => {
    return API("/api/getListSertikasiDanPenghargaan", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            // Add any other headers if needed
        },
        body: tipe ? `tipe=${tipe}` : ""
    })
}

const getListOrganisasi = (tipe) => {
    return API("/api/getListOrganisasi", {
        method: "POST",
        body: {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                // Add any other headers if needed
            },
            body: tipe ? `tipe=${tipe}` : ""
        }
    })
}

const getListAlamatDanKontak = (tipe) => {
    return API("/api/getListAlamatDanKontak", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            // Add any other headers if needed
        },
        body: tipe ? `tipe=${tipe}` : ""
    })
}

const getKarirData = () => {
    return API("/api/getKarirData")
}

const getKategoriProyek = () => {
    return API("/api/getKategoriProyek")
}

const getDetailProyek = (id) => {
    return API("/api/getDetailProyek", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            // Add any other headers if needed
        },
        body: id ? `id=${id}` : ""
    })
}
export {
    getDetailProyek,
    getKategoriProyek,
    getKarirData,
    getListAlamatDanKontak,
    getListOrganisasi,
    getTimelinePerusahaan,
    getMenuContentByAlias,
    getMenuHeader, getBanner,
    getLatestNews, getSustainability, getContact, getMemberOfWika, getHomepageData,
    getNewsContentByAlias,
    getListSertikasiDanPenghargaan
}