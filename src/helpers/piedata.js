export const getAverageAcres = (data) => {
    let object = {}
    
    for(let i = 0; i < data.length; i++){
      if(object[`${data[i].irwin_FireCause}`]){
        object[`${data[i].irwin_FireCause}`][0] += 1
        object[`${data[i].irwin_FireCause}`][1] += data[i].poly_Acres_AutoCalc
      }
      else{
        object[`${data[i].irwin_FireCause}`] = [1, data[i].poly_Acres_AutoCalc]
      }
    }


    let array = []
    for(const key in object){
      if(!(key === "Undetermined")){
        object[key] = object[key][1] / object[key][0]
        array.push({name: key, value: object[key]})
      }
    }

    return array
}

export const getTotalFires = (data) => {
    let object = {}
    
    for(let i = 0; i < data.length; i++){
      if(object[`${data[i].irwin_FireCause}`]){
        object[`${data[i].irwin_FireCause}`] += 1
      }
      else{
        object[`${data[i].irwin_FireCause}`] = 1
      }
    }


    let array = []
    for(const key in object){
      if(!(key === "Undetermined")){
        array.push({name: key, value: object[key]})
      }
    }

    return array
}

export const  renderCustomizedLabel = ({x, y, name, value}) => {
    return (
      <text x={x} y={y} fill="black" textAnchor="start" dominantBaseline="central">
        {name}: {value.toFixed(2)}
      </text>
    );
  };