export const getAcres = (data) => {
    
    let object = {}
    
    for(let i = 0; i < data.length; i++){
      if(object[`${data[i].irwin_PredominantFuelGroup}`]){
        object[`${data[i].irwin_PredominantFuelGroup}`][0] += 1
        object[`${data[i].irwin_PredominantFuelGroup}`][1] += data[i].poly_Acres_AutoCalc
      }
      else{
        object[`${data[i].irwin_PredominantFuelGroup}`] = [1, data[i].poly_Acres_AutoCalc]
      }
    }


    let array = []
    for(const key in object){
      if(!(key === "null")){
        if(key)
        object[key] = object[key][1] / object[key][0]
        array.push({PrimaryFuel: key, Acres: object[key].toFixed(2)})
      }
    }

    return array


}

export const getDuration = (data) => {

    let object = {}
    
    for(let i = 0; i < data.length; i++){
      if(object[`${data[i].irwin_PredominantFuelGroup}`]){
        object[`${data[i].irwin_PredominantFuelGroup}`][0] += 1
        object[`${data[i].irwin_PredominantFuelGroup}`][1] += data[i].duration
      }
      else{
        object[`${data[i].irwin_PredominantFuelGroup}`] = [1, data[i].duration]
      }
    }


    let array = []
    for(const key in object){
      if(!(key === "null")){
        object[key] = object[key][1] / object[key][0]
        array.push({PrimaryFuel: key, Duration: parseFloat(object[key].toFixed(2))})
      }
    }

    return array
}

// const data = [
//     {
//       name: "Page A",
//       acres: 4000,
//       duration: 2400
//     },
//     {
//       name: "Page B",
//       acres: 3000,
//       duration: 1398
//     },
//     {
//       name: "Page C",
//       acres: 2000,
//       duration: 9800
//     },
//     {
//       name: "Page D",
//       acres: 2780,
//       duration: 3908
//     },
//     {
//       name: "Page E",
//       acres: 1890,
//       duration: 4800
//     },
//     {
//       name: "Page F",
//       acres: 2390,
//       duration: 3800
//     },
//     {
//       name: "Page G",
//       acres: 3490,
//       duration: 4300
//     }
//   ];