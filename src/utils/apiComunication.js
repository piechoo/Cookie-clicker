
export const patchCounter = (counter, host)=>{

    const res = await axios.patch(`${host}/api/v1/progress`, { click_count: counter });
    return res.data
}
