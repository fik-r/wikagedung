import API from "@/utils/api"

const getMenuHeader = () => {
    return API.get("/api/getMenuHeader")
}

const getLatestNews = () => {
    return API.get("/api/getLatestNews")
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

export { getMenuHeader, getBanner, getLatestNews, getSustainability, getContact, getMemberOfWika, getHomepageData, getNewsContentByAlias }