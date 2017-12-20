//**********El total de estudiantes presentes por sede y generación.**********
//En las siguientes variables se encuentran el número de estudiantes por cada sede y generación
var alumnasAQP20162=(data['AQP']['2016-2']['students']).length;
var alumnasAQP20171=(data['AQP']['2017-1']['students']).length;
var alumnasCDMX20171=(data['CDMX']['2017-1']['students']).length;
var alumnasCDMX20172=(data['CDMX']['2017-2']['students']).length;
var alumnasLIM20162=(data['LIM']['2016-2']['students']).length;
var alumnasLIM20171=(data['LIM']['2017-1']['students']).length;
var alumnasLIM20172=(data['LIM']['2017-2']['students']).length;
var alumnasSCL20162=(data['SCL']['2016-2']['students']).length;
var alumnasSCL20171=(data['SCL']['2017-1']['students']).length;
var alumnasSCL20172=(data['SCL']['2017-2']['students']).length;


console.log('Totales en AQP2016-2='+alumnasAQP20162);
console.log('Totales en AQP2017-1='+alumnasAQP20171);
console.log('Totales en CDMX2017-1='+alumnasCDMX20171);
console.log('Totales en CDMX2017-2='+alumnasCDMX20172);
console.log('Totales en LIM2016-2='+alumnasLIM20162);
console.log('Totales en LIM2017-1='+alumnasLIM20171);
console.log('Totales en LIM2017-2='+alumnasLIM20172);
console.log('Totales en SCL2016-2='+alumnasSCL20162);
console.log('Totales en SCL2017-1='+alumnasSCL20171);
console.log('Totales en SCL2017-2='+alumnasSCL20172);
var activeContAQP20162=0;
var activeContAQP20171=0;
var activeContCDMX20171=0;
var activeContCDMX20172=0;
var activeContLIM20162=0;
var activeContLIM20171=0;
var activeContLIM20172=0;
var activeContSCL20162=0;
var activeContSCL20171=0;
var activeContSCL20172=0;
var lowTechContAQP20162=0;
var lowTechContAQP20171=0;
var lowTechContCDMX20171=0;
var lowTechContCDMX20172=0;
var lowTechContLIM20162=0;
var lowTechContLIM20171=0;
var lowTechContLIM20172=0;
var lowTechContSCL20162=0;
var lowTechContSCL20171=0;
var lowTechContSCL20172=0;
var lowHseContAQP20162=0;
var lowHseContAQP20171=0;
var lowHseContCDMX20171=0;
var lowHseContCDMX20172=0;
var lowHseContLIM20162=0;
var lowHseContLIM20171=0;
var lowHseContLIM20172=0;
var lowHseContSCL20162=0;
var lowHseContSCL20171=0;
var lowHseContSCL20172=0;


//********** El porcentaje de deserción de estudiantes **********
//*****activeCont muestra las alumas que estan inactivas AQP20162
for ( var i=0; i<alumnasAQP20162 ;i++){
  if ((data['AQP']['2016-2']['students'][i]['active'])=== false) {
    activeContAQP20162 =activeContAQP20162+1;
  }
}


//Aplicando la fórmula de porcentajes
// activePercent tiene el porcentaje de deserción
var activePercentAQP20162=((activeContAQP20162*100)/alumnasAQP20162);
console.log('Activos en AQP2016-2='+activePercentAQP20162);


//*****activeCont muestra las alumas que estan inactivas AQP20171
for ( var i=0; i<alumnasAQP20171 ;i++){
  if ((data['AQP']['2017-1']['students'][i]['active'])=== false) {
    activeContAQP20171 =activeContAQP20171+1;
  }
}
//Aplicando la fórmula de porcentajes
// activePercent tiene el porcentaje de deserción
var activePercentAQP20171=((activeContAQP20171*100)/alumnasAQP20171);
console.log('Activos en AQP2017-1='+activePercentAQP20171);


//*****activeCont muestra las alumas que estan inactivas CDMX20171
for ( var i=0; i<alumnasCDMX20171 ;i++){
  if ((data['CDMX']['2017-1']['students'][i]['active'])=== false) {
    activeContCDMX20171 =activeContCDMX20171+1;
  }
}
//Aplicando la fórmula de porcentajes
// activePercent tiene el porcentaje de deserción
var activePercentCDMX20171=((activeContCDMX20171*100)/alumnasCDMX20171);
console.log('Activos en CDMX2017-1='+activePercentCDMX20171);


//*****activeCont muestra las alumas que estan inactivas CDMX20172
for ( var i=0; i<alumnasCDMX20172 ;i++){
  if ((data['CDMX']['2017-2']['students'][i]['active'])=== false) {
    activeContCDMX20172 =activeContCDMX20172+1;
  }
}


//Aplicando la fórmula de porcentajes
// activePercent tiene el porcentaje de deserción
var activePercentCDMX20172=((activeContCDMX20172*100)/alumnasCDMX20172);
console.log('Activos en CDMX2017-2='+activePercentCDMX20172);


//*****activeCont muestra las alumas que estan inactivas LIM20162
for ( var i=0; i<alumnasLIM20162 ;i++){
  if ((data['LIM']['2016-2']['students'][i]['active'])=== false) {
    activeContLIM20162 =activeContLIM20162+1;
  }
}
//Aplicando la fórmula de porcentajes
// activePercent tiene el porcentaje de deserción
var activePercentLIM20162=((activeContLIM20162*100)/alumnasLIM20162);
console.log('Activos en LIM2016-2='+activePercentLIM20162);


//*****activeCont muestra las alumas que estan inactivas LIM20171
for ( var i=0; i<alumnasLIM20171 ;i++){
  if ((data['LIM']['2017-1']['students'][i]['active'])=== false) {
    activeContLIM20171 =activeContLIM20171+1;
  }
}
//Aplicando la fórmula de porcentajes
// activePercent tiene el porcentaje de deserción
var activePercentLIM20171=((activeContLIM20171*100)/alumnasLIM20171);
console.log('Activos en LIM2017-1='+activePercentLIM20171);


//*****activeCont muestra las alumas que estan inactivas LIM20172
for ( var i=0; i<alumnasLIM20172 ;i++){
  if ((data['LIM']['2017-2']['students'][i]['active'])=== false) {
    activeContLIM20172 =activeContLIM20172+1;
  }
}
//Aplicando la fórmula de porcentajes
// activePercent tiene el porcentaje de deserción
var activePercentLIM20172=((activeContLIM20172*100)/alumnasLIM20172);
console.log('Activos en LIM2017-2='+activePercentLIM20172);


//*****activeCont muestra las alumas que estan inactivas SCL20162
for ( var i=0; i<alumnasSCL20162 ;i++){
  if ((data['SCL']['2016-2']['students'][i]['active'])=== false) {
    activeContSCL20162 =activeContSCL20162+1;
  }
}
//Aplicando la fórmula de porcentajes
// activePercent tiene el porcentaje de deserción
var activePercentSCL20162=((activeContSCL20162*100)/alumnasSCL20162);
console.log('Activos en SCL2016-2='+activePercentSCL20162);


//*****activeCont muestra las alumas que estan inactivas LIM20171
for ( var i=0; i<alumnasSCL20171 ;i++){
  if ((data['SCL']['2017-1']['students'][i]['active'])=== false) {
    activeContSCL20171 =activeContSCL20171+1;
  }
}
//Aplicando la fórmula de porcentajes
// activePercent tiene el porcentaje de deserción
var activePercentSCL20171=((activeContSCL20171*100)/alumnasSCL20171);
console.log('Activos en SCL2017-1='+activePercentSCL20171);


//*****activeCont muestra las alumas que estan inactivas LIM20172
for ( var i=0; i<alumnasSCL20172 ;i++){
  if ((data['SCL']['2017-2']['students'][i]['active'])=== false) {
    activeContSCL20172 =activeContSCL20172+1;
  }
}
//Aplicando la fórmula de porcentajes
// activePercent tiene el porcentaje de deserción
var activePercentSCL20172=((activeContSCL20172*100)/alumnasSCL20172);
console.log('Activos en SCL2017-2='+activePercentSCL20172);


//*****Porcentaje de deserción Total
//(activeContTotal) Estudiantes totales activas
var activeContTotal=activeContAQP20162+activeContAQP20171+
                    activeContCDMX20171+activeContCDMX20172+
                    activeContLIM20162+activeContLIM20171+activeContLIM20172+
                    activeContSCL20162+activeContSCL20171+activeContSCL20172;


//(alumnasTotales) Total de estudiantes
var alumnasTotales=alumnasAQP20162+alumnasAQP20171+alumnasCDMX20171+alumnasCDMX20172+alumnasLIM20162+alumnasLIM20171+alumnasLIM20172+alumnasSCL20162+alumnasSCL20171+alumnasSCL20172;
console.log('Alumnas totales='+alumnasTotales);
// (activePercentTotal)Cálculo de porcentaje de las alumnas totales
var activePercentTotal=(activeContTotal*100)/alumnasTotales;
console.log('Porcentaje total='+ activePercentTotal);


//********** La cantidad de estudiantes que superan la meta de puntos en
//promedio de todos los sprints cursados. La meta de puntos es 70% del
//total de puntos en HSE y en tech. **********


//Calificación Tech
//i es el contador de generaciones_estudiantes


//*****lowTechContAQP20162 muestra el número de alumnas que alcanzan un porcentaje mayor al 70%
for ( i=0; i<alumnasAQP20162 ;i++){
  if ((data['AQP']['2016-2']['students'][i]['sprints'][0]['score']['tech'])>= 1260&&
      (data['AQP']['2016-2']['students'][i]['sprints'][1]['score']['tech'])>= 1260&&
      (data['AQP']['2016-2']['students'][i]['sprints'][2]['score']['tech'])>= 1260&&
      (data['AQP']['2016-2']['students'][i]['sprints'][3]['score']['tech'])>= 1260)
   {
    lowTechContAQP20162 =lowTechContAQP20162+1;
   }
 }
console.log('Alcanzan mas de 70% en TECH en AQP2016-2='+lowTechContAQP20162);



//*****lowTechContAQP20171 muestra el número de alumnas que alcanzan un porcentaje mayor al 70%
for ( i=0; i<alumnasAQP20171 ;i++){
  if ((data['AQP']['2017-1']['students'][i]['sprints'][0]['score']['tech'])>= 1260&&
      (data['AQP']['2017-1']['students'][i]['sprints'][1]['score']['tech'])>= 1260&&
      (data['AQP']['2017-1']['students'][i]['sprints'][2]['score']['tech'])>= 1260)
   {
    lowTechContAQP20171 =lowTechContAQP20171+1;
   }
 }
console.log('Alcanzan mas de 70% en TECH en AQP2017-1='+lowTechContAQP20171);


//*****lowTechContCDMX20171 muestra el número de alumnas que alcanzan un porcentaje mayor al 70%
for ( i=0; i<alumnasCDMX20171 ;i++){
  if ((data['CDMX']['2017-1']['students'][i]['sprints'][0]['score']['tech'])>= 1260&&
      (data['CDMX']['2017-1']['students'][i]['sprints'][1]['score']['tech'])>= 1260&&
      (data['CDMX']['2017-1']['students'][i]['sprints'][2]['score']['tech'])>= 1260)
   {
    lowTechContCDMX20171 =lowTechContCDMX20171+1;
   }
 }
console.log('Alcanzan mas de 70% en TECH en CDMX2017-1='+lowTechContCDMX20171);


//*****lowTechContCDMX20172 muestra el número de alumnas que alcanzan un porcentaje mayor al 70%
//if(data['CDMX']['2017-2']['students'][11]['sprints'].length===0){ } ---Si el campo sprint es vacío no los contabiliza
// Si el campo sprint contiene datos si los toma en cuenta
for ( i=0; i<alumnasCDMX20172 ;i++){
  if(data['CDMX']['2017-2']['students'][i]['sprints'].length!== 0){
    if ((data['CDMX']['2017-2']['students'][i]['sprints'][0]['score']['tech'])>= 1260&&
        (data['CDMX']['2017-2']['students'][i]['sprints'][1]['score']['tech'])>= 1260)
     {
      lowTechContCDMX20172 =lowTechContCDMX20172+1;
     }
   }
}
console.log('Alcanzan mas de 70% en TECH en CDMX2017-2='+lowTechContCDMX20172);


//*****lowTechContLIM20162 muestra el número de alumnas que alcanzan un porcentaje mayor al 70%
for ( i=0; i<alumnasLIM20162 ;i++){
  if(data['LIM']['2016-2']['students'][i]['sprints'].length!== 0){
    if ((data['LIM']['2016-2']['students'][i]['sprints'][0]['score']['tech'])>= 1260&&
        (data['LIM']['2016-2']['students'][i]['sprints'][1]['score']['tech'])>= 1260)
     {
      lowTechContLIM20162 =lowTechContLIM20162+1;
     }
  }
 }
console.log('Alcanzan mas de 70% en TECH en LIM2016-2='+lowTechContLIM20162);


//*****lowTechContLIM20171 muestra el número de alumnas que alcanzan un porcentaje mayor al 70%
for ( i=0; i<alumnasLIM20171 ;i++){
  if(data['LIM']['2017-1']['students'][i]['sprints'].length!== 0){
    if ((data['LIM']['2017-1']['students'][i]['sprints'][0]['score']['tech'])>= 1260&&
        (data['LIM']['2017-1']['students'][i]['sprints'][1]['score']['tech'])>= 1260)
     {
      lowTechContLIM20171 =lowTechContLIM20171+1;
     }
  }
 }
console.log('Alcanzan mas de 70% en TECH en LIM2017-1='+lowTechContLIM20171);


//*****lowTechContLIM20171 muestra el número de alumnas que alcanzan un porcentaje mayor al 70%
for ( i=0; i<alumnasLIM20172 ;i++){
  if(data['LIM']['2017-2']['students'][i]['sprints'].length!== 0){
    if ((data['LIM']['2017-2']['students'][i]['sprints'][0]['score']['tech'])>= 1260&&
        (data['LIM']['2017-2']['students'][i]['sprints'][1]['score']['tech'])>= 1260)
     {
      lowTechContLIM20172 =lowTechContLIM20172+1;
     }
   }
 }
console.log('Alcanzan mas de 70% en TECH en LIM2017-2='+lowTechContLIM20172);


//*****lowTechContLSCL0162 muestra el número de alumnas que alcanzan un porcentaje mayor al 70%
for ( i=0; i<alumnasSCL20162 ;i++){
  if(data['SCL']['2016-2']['students'][i]['sprints'].length!== 0){
    if ((data['SCL']['2016-2']['students'][i]['sprints'][0]['score']['tech'])>= 1260&&
        (data['SCL']['2016-2']['students'][i]['sprints'][1]['score']['tech'])>= 1260&&
        (data['SCL']['2016-2']['students'][i]['sprints'][2]['score']['tech'])>= 1260&&
        (data['SCL']['2016-2']['students'][i]['sprints'][3]['score']['tech'])>= 1260)
     {
      lowTechContSCL20162 =lowTechContSCL20162+1;
     }
  }
 }
console.log('Alcanzan mas de 70% en TECH en SCL2016-2='+lowTechContSCL20162);


//*****lowTechContSCL20171 muestra el número de alumnas que alcanzan un porcentaje mayor al 70%
for ( i=0; i<alumnasSCL20171 ;i++){
  if(data['SCL']['2017-1']['students'][i]['sprints'].length!== 0){
    if ((data['SCL']['2017-1']['students'][i]['sprints'][0]['score']['tech'])>= 1260&&
        (data['SCL']['2017-1']['students'][i]['sprints'][1]['score']['tech'])>= 1260)
     {
      lowTechContSCL20171 =lowTechContSCL20171+1;
     }
   }
 }
console.log('Alcanzan mas de 70% en TECH en SCL2017-1='+lowTechContSCL20171);


//*****lowTechContSCL20172 muestra el número de alumnas que alcanzan un porcentaje mayor al 70%
for ( i=0; i<alumnasSCL20172; i++){
  if(data['SCL']['2017-2']['students'][i]['active']=== true){ // el dato 4750 es incorrecto(esta vacío)
    if ((data['SCL']['2017-2']['students'][i]['sprints'][0]['score']['tech'])>= 1260&&
        (data['SCL']['2017-2']['students'][i]['sprints'][1]['score']['tech'])>= 1260)
     {
      lowTechContSCL20172 =lowTechContSCL20172+1;
     }
   }
 }
console.log('Alcanzan mas de 70% en TECH en SCL2017-2='+lowTechContSCL20172);


//Calificación HSE
//i es el contador de generaciones_estudiantes


//*****lowHseContAQP20162 muestra el número de alumnas que alcanzan un porcentaje mayor al 70%
for ( i=0; i<alumnasAQP20162 ;i++){
  if ((data['AQP']['2016-2']['students'][i]['sprints'][0]['score']['hse'])>= 840&&
      (data['AQP']['2016-2']['students'][i]['sprints'][1]['score']['hse'])>= 840&&
      (data['AQP']['2016-2']['students'][i]['sprints'][2]['score']['hse'])>= 840&&
      (data['AQP']['2016-2']['students'][i]['sprints'][3]['score']['hse'])>= 840)
   {
    lowHseContAQP20162 =lowHseContAQP20162+1;
   }
 }
console.log('Alcanzan mas de 70% en HSE en AQP2016-2='+lowHseContAQP20162);


//*****lowHseContAQP20171 muestra el número de alumnas que alcanzan un porcentaje mayor al 70%
for ( i=0; i<alumnasAQP20171 ;i++){
  if ((data['AQP']['2017-1']['students'][i]['sprints'][0]['score']['hse'])>= 840&&
      (data['AQP']['2017-1']['students'][i]['sprints'][1]['score']['hse'])>= 840&&
      (data['AQP']['2017-1']['students'][i]['sprints'][2]['score']['hse'])>= 840)
   {
    lowHseContAQP20171 =lowHseContAQP20171+1;
   }
 }
console.log('Alcanzan mas de 70% en HSE en AQP2017-1='+lowHseContAQP20171);


//*****lowHseContAQP20171 muestra el número de alumnas que alcanzan un porcentaje mayor al 70%
for ( i=0; i<alumnasCDMX20171 ;i++){
  if ((data['CDMX']['2017-1']['students'][i]['sprints'][0]['score']['hse'])>= 840&&
      (data['CDMX']['2017-1']['students'][i]['sprints'][1]['score']['hse'])>= 840&&
      (data['CDMX']['2017-1']['students'][i]['sprints'][2]['score']['hse'])>= 840)
   {
    lowHseContCDMX20171 =lowHseContCDMX20171+1;
   }
 }
console.log('Alcanzan mas de 70% en HSE en CDMX2017-1='+lowHseContCDMX20171);


//*****lowHseContCDMX20172 muestra el número de alumnas que alcanzan un porcentaje mayor al 70%
//if(data['CDMX']['2017-2']['students'][11]['sprints'].length===0){ } ---Si el campo sprint es vacío no los contabiliza
// Si el campo sprint contiene datos si los toma en cuenta
for ( i=0; i<alumnasCDMX20172 ;i++){
  if(data['CDMX']['2017-2']['students'][i]['sprints'].length!== 0){
    if ((data['CDMX']['2017-2']['students'][i]['sprints'][0]['score']['hse'])>= 840&&
        (data['CDMX']['2017-2']['students'][i]['sprints'][1]['score']['hse'])>= 840)
     {
      lowHseContCDMX20172 =lowHseContCDMX20172+1;
     }
   }
}
console.log('Alcanzan mas de 70% en HSE en CDMX2017-2='+lowHseContCDMX20172);


//*****lowHseContLIM20162 muestra el número de alumnas que alcanzan un porcentaje mayor al 70%
for ( i=0; i<alumnasLIM20162 ;i++){
  if(data['LIM']['2016-2']['students'][i]['sprints'].length!== 0){
    if ((data['LIM']['2016-2']['students'][i]['sprints'][0]['score']['hse'])>= 840&&
        (data['LIM']['2016-2']['students'][i]['sprints'][1]['score']['hse'])>= 840)
     {
      lowHseContLIM20162 =lowHseContLIM20162+1;
     }
  }
 }
console.log('Alcanzan mas de 70% en HSE en LIM2016-2='+lowHseContLIM20162);


//*****lowHseContLIM20171 muestra el número de alumnas que alcanzan un porcentaje mayor al 70%
for ( i=0; i<alumnasLIM20171 ;i++){
  if(data['LIM']['2017-1']['students'][i]['sprints'].length!== 0){
    if ((data['LIM']['2017-1']['students'][i]['sprints'][0]['score']['hse'])>= 840&&
        (data['LIM']['2017-1']['students'][i]['sprints'][1]['score']['hse'])>= 840)
     {
      lowHseContLIM20171 =lowHseContLIM20171+1;
     }
  }
 }
console.log('Alcanzan mas de 70% en HSE en LIM2017-1='+lowHseContLIM20171);


//*****lowHseContLIM20171 muestra el número de alumnas que alcanzan un porcentaje mayor al 70%
for ( i=0; i<alumnasLIM20172 ;i++){
  if(data['LIM']['2017-2']['students'][i]['sprints'].length!== 0){
    if ((data['LIM']['2017-2']['students'][i]['sprints'][0]['score']['hse'])>= 840&&
        (data['LIM']['2017-2']['students'][i]['sprints'][1]['score']['hse'])>= 840)
     {
      lowHseContLIM20172 =lowHseContLIM20172+1;
     }
   }
 }
console.log('Alcanzan mas de 70% en HSE en LIM2017-2='+lowHseContLIM20172);


//*****lowHseContLSCL0162 muestra el número de alumnas que alcanzan un porcentaje mayor al 70%
for ( i=0; i<alumnasSCL20162 ;i++){
  if(data['SCL']['2016-2']['students'][i]['sprints'].length!== 0){
    if ((data['SCL']['2016-2']['students'][i]['sprints'][0]['score']['hse'])>= 840&&
        (data['SCL']['2016-2']['students'][i]['sprints'][1]['score']['hse'])>= 840&&
        (data['SCL']['2016-2']['students'][i]['sprints'][2]['score']['hse'])>= 840&&
        (data['SCL']['2016-2']['students'][i]['sprints'][3]['score']['hse'])>= 840)
     {
      lowHseContSCL20162 =lowHseContSCL20162+1;
     }
  }
 }
console.log('Alcanzan mas de 70% en HSE en SCL2016-2='+lowHseContSCL20162);


//*****lowHseContSCL20171 muestra el número de alumnas que alcanzan un porcentaje mayor al 70%
for ( i=0; i<alumnasSCL20171 ;i++){
  if(data['SCL']['2017-1']['students'][i]['sprints'].length!== 0){
    if ((data['SCL']['2017-1']['students'][i]['sprints'][0]['score']['hse'])>= 840&&
        (data['SCL']['2017-1']['students'][i]['sprints'][1]['score']['hse'])>= 840)
     {
      lowHseContSCL20171 =lowHseContSCL20171+1;
     }
   }
 }
console.log('Alcanzan mas de 70% en HSE en SCL2017-1='+lowHseContSCL20171);


//*****lowHseContSCL20172 muestra el número de alumnas que alcanzan un porcentaje mayor al 70%
for ( i=0; i<alumnasSCL20172; i++){
  if(data['SCL']['2017-2']['students'][i]['active']=== true){ // el dato 4750 es incorrecto(esta vacío)
    if ((data['SCL']['2017-2']['students'][i]['sprints'][0]['score']['hse'])>= 840&&
        (data['SCL']['2017-2']['students'][i]['sprints'][1]['score']['hse'])>= 840)
     {
      lowHseContSCL20172 =lowHseContSCL20172+1;
     }
   }
 }
console.log('Alcanzan mas de 70% en HSE en SCL2017-2='+lowHseContSCL20172);


//*****Alumnas que obtuvieron más del 70% en TECH y HSE
//(supTechHseAQP20162)
var supTechHseAQP20162=0;
for ( i=0; i<alumnasAQP20162 ;i++){
  if(data['AQP']['2016-2']['students'][i]['sprints'].length!== 0){
    if (((data['AQP']['2016-2']['students'][i]['sprints'][0]['score']['tech'])>= 1260&&
        (data['AQP']['2016-2']['students'][i]['sprints'][0]['score']['hse'])>= 840)&&
       ((data['AQP']['2016-2']['students'][i]['sprints'][1]['score']['tech'])>= 1260&&
        (data['AQP']['2016-2']['students'][i]['sprints'][1]['score']['hse'])>= 840) &&
       ((data['AQP']['2016-2']['students'][i]['sprints'][2]['score']['tech'])>= 1260&&
        (data['AQP']['2016-2']['students'][i]['sprints'][2]['score']['hse'])>= 840))
     {
      supTechHseAQP20162 =supTechHseAQP20162+1;
     }
   }
}





console.log('Alcanzan mas de 70% en TOTAL en AQP2016-2='+supTechHseAQP20162);
//cálculo de porcentajes
var percentTotalAQP20162=((supTechHseAQP20162*100)/(alumnasAQP20162-activeContAQP20162));
//(supTechHseAQP20171)
var supTechHseAQP20171=0;
for ( i=0; i<alumnasAQP20171 ;i++){
  if(data['AQP']['2017-1']['students'][i]['sprints'].length!== 0){
    if (((data['AQP']['2017-1']['students'][i]['sprints'][0]['score']['tech'])>= 1260&&
        (data['AQP']['2017-1']['students'][i]['sprints'][0]['score']['hse'])>= 840)&&
       ((data['AQP']['2017-1']['students'][i]['sprints'][1]['score']['tech'])>= 1260&&
        (data['AQP']['2017-1']['students'][i]['sprints'][1]['score']['hse'])>= 840) &&
       ((data['AQP']['2017-1']['students'][i]['sprints'][2]['score']['tech'])>= 1260&&
        (data['AQP']['2017-1']['students'][i]['sprints'][2]['score']['hse'])>= 840))
     {
      supTechHseAQP20171 =supTechHseAQP20171+1;
     }
   }
}
console.log('Alcanzan mas de 70% en TOTAL en AQP2017-1='+supTechHseAQP20171);
//cálculo de porcentajes
var percentTotalAQP20171=((supTechHseAQP20171*100)/(alumnasAQP20171-activeContAQP20171));


//(supTechHseCDMX20171)
var supTechHseCDMX20171=0;
for ( i=0; i<alumnasCDMX20171 ;i++){
  if(data['CDMX']['2017-1']['students'][i]['sprints'].length!== 0){
    if (((data['CDMX']['2017-1']['students'][i]['sprints'][0]['score']['tech'])>= 1260&&
        (data['CDMX']['2017-1']['students'][i]['sprints'][0]['score']['hse'])>= 840)&&
       ((data['CDMX']['2017-1']['students'][i]['sprints'][1]['score']['tech'])>= 1260&&
        (data['CDMX']['2017-1']['students'][i]['sprints'][1]['score']['hse'])>= 840) &&
       ((data['CDMX']['2017-1']['students'][i]['sprints'][2]['score']['tech'])>= 1260&&
        (data['CDMX']['2017-1']['students'][i]['sprints'][2]['score']['hse'])>= 840))
     {
       supTechHseCDMX20171 =supTechHseCDMX20171+1;
     }
   }
}
console.log('Alcanzan mas de 70% en TOTAL en CDM2017-1='+supTechHseCDMX20171);
//cálculo de porcentajes
var percentTotalCDMX20171=((supTechHseCDMX20171*100)/(alumnasCDMX20171-activeContCDMX20171));


//(supTechHseCDMX20172)
var supTechHseCDMX20172=0;
for ( i=0; i<alumnasCDMX20172 ;i++){
  if(data['CDMX']['2017-2']['students'][i]['sprints'].length!== 0){
    if (((data['CDMX']['2017-2']['students'][i]['sprints'][0]['score']['tech'])>= 1260&&
        (data['CDMX']['2017-2']['students'][i]['sprints'][0]['score']['hse'])>= 840)&&
       ((data['CDMX']['2017-2']['students'][i]['sprints'][1]['score']['tech'])>= 1260&&
        (data['CDMX']['2017-2']['students'][i]['sprints'][1]['score']['hse'])>= 840))
     {
      supTechHseCDMX20172 =supTechHseCDMX20172+1;
     }
   }
}
console.log('Alcanzan mas de 70% en TOTAL en CDM2017-2='+supTechHseCDMX20172);
//cálculo de porcentajes
var percentTotalCDMX20172=((supTechHseCDMX20172*100)/(alumnasCDMX20172-activeContCDMX20172));


//(supTechHseLIM20162)
var supTechHseLIM20162=0;
for ( i=0; i<alumnasLIM20162 ;i++){
  if(data['LIM']['2016-2']['students'][i]['sprints'].length!== 0){
    if (((data['LIM']['2016-2']['students'][i]['sprints'][0]['score']['tech'])>= 1260&&
        (data['LIM']['2016-2']['students'][i]['sprints'][0]['score']['hse'])>= 840)&&
       ((data['LIM']['2016-2']['students'][i]['sprints'][1]['score']['tech'])>= 1260&&
        (data['LIM']['2016-2']['students'][i]['sprints'][1]['score']['hse'])>= 840))
     {
      supTechHseLIM20162 =supTechHseLIM20162+1;
     }
   }
}
console.log('Alcanzan mas de 70% en TOTAL en LIM2016-2='+supTechHseLIM20162);
//cálculo de porcentajes
var percentTotalLIM20162=((supTechHseLIM20162*100)/(alumnasLIM20162-activeContLIM20162));
//(supTechHseLIM20171)
var supTechHseLIM20171=0;
for ( i=0; i<alumnasLIM20171 ;i++){
  if(data['LIM']['2017-1']['students'][i]['sprints'].length!== 0){
    if (((data['LIM']['2017-1']['students'][i]['sprints'][0]['score']['tech'])>= 1260&&
        (data['LIM']['2017-1']['students'][i]['sprints'][0]['score']['hse'])>= 840)&&
       ((data['LIM']['2017-1']['students'][i]['sprints'][1]['score']['tech'])>= 1260&&
        (data['LIM']['2017-1']['students'][i]['sprints'][1]['score']['hse'])>= 840)&&
       ((data['LIM']['2017-1']['students'][i]['sprints'][2]['score']['tech'])>= 1260&&
        (data['LIM']['2017-1']['students'][i]['sprints'][2]['score']['hse'])>= 840))
     {
      supTechHseLIM20171 =supTechHseLIM20171+1;
     }
   }
}
console.log('Alcanzan mas de 70% en TOTAL en LIM2017-1='+supTechHseLIM20171);
//cálculo de porcentajes
var percentTotalLIM20171=((supTechHseLIM20171*100)/(alumnasLIM20171-activeContLIM20171));
//(supTechHseLIM20172)
var supTechHseLIM20172=0;
for ( i=0; i<alumnasLIM20172 ;i++){
  if(data['LIM']['2017-2']['students'][i]['sprints'].length!== 0){
    if (((data['LIM']['2017-2']['students'][i]['sprints'][0]['score']['tech'])>= 1260&&
        (data['LIM']['2017-2']['students'][i]['sprints'][0]['score']['hse'])>= 840)&&
       ((data['LIM']['2017-2']['students'][i]['sprints'][1]['score']['tech'])>= 1260&&
        (data['LIM']['2017-2']['students'][i]['sprints'][1]['score']['hse'])>= 840))
     {
      supTechHseLIM20172 =supTechHseLIM20172+1;
     }
   }
}
console.log('Alcanzan mas de 70% en TOTAL en LIM2017-2='+supTechHseLIM20172);
//cálculo de porcentajes
var percentTotalLIM20172=((supTechHseLIM20172*100)/(alumnasLIM20172-activeContLIM20172));
//(supTechHseSCL20162)
var supTechHseSCL20162=0;
for ( i=0; i<alumnasSCL20162 ;i++){
  if(data['SCL']['2016-2']['students'][i]['sprints'].length!== 0){
    if (((data['SCL']['2016-2']['students'][i]['sprints'][0]['score']['tech'])>= 1260&&
        (data['SCL']['2016-2']['students'][i]['sprints'][0]['score']['hse'])>= 840)&&
       ((data['SCL']['2016-2']['students'][i]['sprints'][1]['score']['tech'])>= 1260&&
        (data['SCL']['2016-2']['students'][i]['sprints'][1]['score']['hse'])>= 840)&&
       ((data['SCL']['2016-2']['students'][i]['sprints'][2]['score']['tech'])>= 1260&&
        (data['SCL']['2016-2']['students'][i]['sprints'][2]['score']['hse'])>= 840))
     {
      supTechHseSCL20162 =supTechHseSCL20162+1;
     }
   }
}
console.log('Alcanzan mas de 70% en TOTAL en SCL2016-2='+supTechHseSCL20162);
//cálculo de porcentajes
var percentTotalSCL20162=((supTechHseSCL20162*100)/(alumnasSCL20162-activeContSCL20162));
//(supTechHseSCL20171)
var supTechHseSCL20171=0;
for ( i=0; i<alumnasSCL20171 ;i++){
  if(data['SCL']['2017-1']['students'][i]['sprints'].length!== 0){
    if (((data['SCL']['2017-1']['students'][i]['sprints'][0]['score']['tech'])>= 1260&&
        (data['SCL']['2017-1']['students'][i]['sprints'][0]['score']['hse'])>= 840)&&
       ((data['SCL']['2017-1']['students'][i]['sprints'][1]['score']['tech'])>= 1260&&
        (data['SCL']['2017-1']['students'][i]['sprints'][1]['score']['hse'])>= 840)&&
       ((data['SCL']['2017-1']['students'][i]['sprints'][2]['score']['tech'])>= 1260&&
        (data['SCL']['2017-1']['students'][i]['sprints'][2]['score']['hse'])>= 840))
     {
      supTechHseSCL20171 =supTechHseSCL20171+1;
     }
   }
}
console.log('Alcanzan mas de 70% en TOTAL en SCL2017-1='+supTechHseSCL20171);
//cálculo de porcentajes
var percentTotalSCL20171=((supTechHseSCL20171*100)/(alumnasSCL20171-activeContSCL20171));


//(supTechHseSCL20172)
var supTechHseSCL20172=0;
for ( i=0; i<alumnasSCL20172 ;i++){
  if(data['SCL']['2017-2']['students'][i]['active']=== true){
    if (((data['SCL']['2017-2']['students'][i]['sprints'][0]['score']['tech'])>= 1260&&
        (data['SCL']['2017-2']['students'][i]['sprints'][0]['score']['hse'])>= 840)&&
       ((data['SCL']['2017-2']['students'][i]['sprints'][1]['score']['tech'])>= 1260&&
        (data['SCL']['2017-2']['students'][i]['sprints'][1]['score']['hse'])>= 840))
     {
      supTechHseSCL20172 =supTechHseSCL20172+1;
     }
   }
}
console.log('Alcanzan mas de 70% en TOTAL en SCL2017-2='+supTechHseSCL20172);
//cálculo de porcentajes
var percentTotalSCL20172=((supTechHseSCL20172*100)/(alumnasSCL20172-activeContSCL20172));


//**********El porcentaje que representa el dato anterior en relación al total de estudiantes.**********
// (alumnasTotales)Total de estudiantes
// (supTotal)Total de estudiantes que obtuvieron más de 70% en total
var supTotal=supTechHseAQP20162+supTechHseAQP20171+
             supTechHseCDMX20171+supTechHseCDMX20172+
             supTechHseLIM20162+supTechHseLIM20171+supTechHseLIM20172+
             supTechHseSCL20162+supTechHseSCL20171+supTechHseSCL20172;
console.log('Total de alumas que superan el 70% en total='+supTotal);


//(supTotalPerc)Porcentaje
var supTotalPerc=(supTotal*100)/alumnasTotales;


console.log('Porcentaje de alumnas que superan el 70%='+supTotalPerc);


//**********La cantidad y el porcentaje que representa el total de estudiantes
//que superan la meta de puntos técnicos en promedio y por sprint.**********


//*****Para el primer sprint TECH
//(contSupTechAQP2016_2_S1) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en AQP2016_2
var contSupTechAQP2016_2_S1=0;
for ( i=0; i<alumnasAQP20162; i++){
  if ((data['AQP']['2016-2']['students'][i]['sprints'][0]['score']['tech'])>= 1260)
   {
    contSupTechAQP2016_2_S1 = contSupTechAQP2016_2_S1+1;
   }
 }
console.log('Alumnas que tienen más de 70% TECH AQP2016_2_S1='+contSupTechAQP2016_2_S1);


//(contSupTechAQP2017_1_S1) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en AQP2017_1
var contSupTechAQP2017_1_S1=0;
for ( i=0; i<alumnasAQP20171 ;i++){
  if ((data['AQP']['2017-1']['students'][i]['sprints'][0]['score']['tech'])>= 1260)
   {
    contSupTechAQP2017_1_S1 = contSupTechAQP2017_1_S1+1;
   }
 }
console.log('Alumnas que tienen más de 70% TECH AQP2017_1_S1='+contSupTechAQP2017_1_S1);


//(contSupTechCDMX2017_1_S1) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en CDMX2017_1
var contSupTechCDMX2017_1_S1=0;
for ( i=0; i<alumnasCDMX20171 ;i++){
  if ((data['CDMX']['2017-1']['students'][i]['sprints'][0]['score']['tech'])>= 1260)
   {
    contSupTechCDMX2017_1_S1 = contSupTechCDMX2017_1_S1+1;
   }
 }
console.log('Alumnas que tienen más de 70% TECH CDMX2017_1_S1='+contSupTechCDMX2017_1_S1);


//(contSupTechCDMX2017_2_S1) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en CDMX2017_2
var contSupTechCDMX2017_2_S1=0;
for ( i=0; i<alumnasCDMX20172 ;i++){
  if(data['CDMX']['2017-2']['students'][i]['sprints'].length!== 0){
    if ((data['CDMX']['2017-2']['students'][i]['sprints'][0]['score']['tech'])>= 1260)
    {
      contSupTechCDMX2017_2_S1 = contSupTechCDMX2017_2_S1+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% TECH CDMX2017_2_S1='+contSupTechCDMX2017_2_S1);


//(contSupTechLIM2016_2_S1) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en LIM2016_2
var contSupTechLIM2016_2_S1=0;
for ( i=0; i<alumnasLIM20162 ;i++){
  if(data['LIM']['2016-2']['students'][i]['sprints'].length!== 0){
    if ((data['LIM']['2016-2']['students'][i]['sprints'][0]['score']['tech'])>= 1260)
    {
      contSupTechLIM2016_2_S1 = contSupTechLIM2016_2_S1+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% TECH LIM2016_2_S1='+contSupTechLIM2016_2_S1);


//(contSupTechLIM2017_1_S1) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en LIM2017_1
var contSupTechLIM2017_1_S1=0;
for ( i=0; i<alumnasLIM20171 ;i++){
  if(data['LIM']['2017-1']['students'][i]['sprints'].length!== 0){
    if ((data['LIM']['2017-1']['students'][i]['sprints'][0]['score']['tech'])>= 1260)
    {
      contSupTechLIM2017_1_S1 = contSupTechLIM2017_1_S1+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% TECH LIM2017_1_S1='+contSupTechLIM2017_1_S1);


//(contSupTechLIM2017_2_S1) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en LIM2017_2
var contSupTechLIM2017_2_S1=0;
for ( i=0; i<alumnasLIM20172 ;i++){
  if(data['LIM']['2017-2']['students'][i]['sprints'].length!== 0){
    if ((data['LIM']['2017-2']['students'][i]['sprints'][0]['score']['tech'])>= 1260)
    {
      contSupTechLIM2017_2_S1 = contSupTechLIM2017_2_S1+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% TECH LIM2017_2_S1='+contSupTechLIM2017_2_S1);


//(contSupTechSCL2016_2_S1) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en SCL2016_2
var contSupTechSCL2016_2_S1=0;
for ( i=0; i<alumnasSCL20162 ;i++){
  if(data['SCL']['2016-2']['students'][i]['sprints'].length!== 0){
    if ((data['SCL']['2016-2']['students'][i]['sprints'][0]['score']['tech'])>= 1260)
    {
      contSupTechSCL2016_2_S1 = contSupTechSCL2016_2_S1+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% TECH SCL2016_2_S1='+contSupTechSCL2016_2_S1);


//(contSupTechSCL2017_1_S1) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en SCL2017_1
var contSupTechSCL2017_1_S1=0;
for ( i=0; i<alumnasSCL20171 ;i++){
  if(data['SCL']['2017-1']['students'][i]['sprints'].length!== 0){
    if ((data['SCL']['2017-1']['students'][i]['sprints'][0]['score']['tech'])>= 1260)
    {
      contSupTechSCL2017_1_S1 = contSupTechSCL2017_1_S1+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% TECH SCL2017_1_S1='+contSupTechSCL2017_1_S1);


//(contSupTechSCL2017_2_S1) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en SCL2017_2
var contSupTechSCL2017_2_S1=0;
for ( i=0; i<alumnasSCL20172 ;i++){
  if(data['SCL']['2017-2']['students'][i]['active']=== true){
    if ((data['SCL']['2017-2']['students'][i]['sprints'][0]['score']['tech'])>= 1260)
    {
      contSupTechSCL2017_2_S1 = contSupTechSCL2017_2_S1+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% TECH SCL2017_2_S1='+contSupTechSCL2017_2_S1);
//Promedio TECH_S1
var promedioTechS1 =((contSupTechAQP2016_2_S1+contSupTechAQP2017_1_S1+
                    contSupTechCDMX2017_1_S1+contSupTechCDMX2017_2_S1+
                    contSupTechLIM2016_2_S1+contSupTechLIM2017_1_S1+contSupTechLIM2017_2_S1+
                    contSupTechSCL2016_2_S1+contSupTechSCL2017_1_S1+contSupTechSCL2017_2_S1)/10);


//*****Para el SEGUNDO sprint TECH
//(contSupTechAQP2016_2_S2) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en AQP2016_2
var contSupTechAQP2016_2_S2=0;
for ( i=0; i<alumnasAQP20162; i++){
  if ((data['AQP']['2016-2']['students'][i]['sprints'][1]['score']['tech'])>= 1260)
   {
    contSupTechAQP2016_2_S2 = contSupTechAQP2016_2_S2+1;
   }
 }
console.log('Alumnas que tienen más de 70% TECH AQP2016_2_S2='+contSupTechAQP2016_2_S2);


//(contSupTechAQP2017_1_S2) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en AQP2017_1
var contSupTechAQP2017_1_S2=0;
for ( i=0; i<alumnasAQP20171 ;i++){
  if ((data['AQP']['2017-1']['students'][i]['sprints'][1]['score']['tech'])>= 1260)
   {
    contSupTechAQP2017_1_S2 = contSupTechAQP2017_1_S2+1;
   }
 }
console.log('Alumnas que tienen más de 70% TECH AQP2017_1_S2='+contSupTechAQP2017_1_S2);


//(contSupTechCDMX2017_1_S2) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en CDMX2017_1
var contSupTechCDMX2017_1_S2=0;
for ( i=0; i<alumnasCDMX20171 ;i++){
  if ((data['CDMX']['2017-1']['students'][i]['sprints'][1]['score']['tech'])>= 1260)
   {
    contSupTechCDMX2017_1_S2 = contSupTechCDMX2017_1_S2+1;
   }
 }
console.log('Alumnas que tienen más de 70% TECH CDMX2017_1_S2='+contSupTechCDMX2017_1_S2);


//(contSupTechCDMX2017_2_S2) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en CDMX2017_2
var contSupTechCDMX2017_2_S2=0;
for ( i=0; i<alumnasCDMX20172 ;i++){
  if(data['CDMX']['2017-2']['students'][i]['sprints'].length!== 0){
    if ((data['CDMX']['2017-2']['students'][i]['sprints'][1]['score']['tech'])>= 1260)
    {
      contSupTechCDMX2017_2_S2 = contSupTechCDMX2017_2_S2+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% TECH CDMX2017_2_S2='+contSupTechCDMX2017_2_S2);


//(contSupTechLIM2016_2_S2) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en LIM2016_2
var contSupTechLIM2016_2_S2=0;
for ( i=0; i<alumnasLIM20162 ;i++){
  if(data['LIM']['2016-2']['students'][i]['sprints'].length!== 0){
    if ((data['LIM']['2016-2']['students'][i]['sprints'][1]['score']['tech'])>= 1260)
    {
      contSupTechLIM2016_2_S2 = contSupTechLIM2016_2_S2+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% TECH LIM2016_2_S2='+contSupTechLIM2016_2_S2);


//(contSupTechLIM2017_1_S2) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en LIM2017_1
var contSupTechLIM2017_1_S2=0;
for ( i=0; i<alumnasLIM20171 ;i++){
  if(data['LIM']['2017-1']['students'][i]['sprints'].length!== 0){
    if ((data['LIM']['2017-1']['students'][i]['sprints'][1]['score']['tech'])>= 1260)
    {
      contSupTechLIM2017_1_S2 = contSupTechLIM2017_1_S2+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% TECH LIM2017_1_S2='+contSupTechLIM2017_1_S2);


//(contSupTechLIM2017_2_S2) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en LIM2017_2
var contSupTechLIM2017_2_S2=0;
for ( i=0; i<alumnasLIM20172 ;i++){
  if(data['LIM']['2017-2']['students'][i]['sprints'].length!== 0){
    if ((data['LIM']['2017-2']['students'][i]['sprints'][1]['score']['tech'])>= 1260)
    {
      contSupTechLIM2017_2_S2 = contSupTechLIM2017_2_S2+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% TECH LIM2017_2_S2='+contSupTechLIM2017_2_S2);


//(contSupTechSCL2016_2_S2) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en SCL2016_2
var contSupTechSCL2016_2_S2=0;
for ( i=0; i<alumnasSCL20162 ;i++){
  if(data['SCL']['2016-2']['students'][i]['sprints'].length!== 0){
    if ((data['SCL']['2016-2']['students'][i]['sprints'][1]['score']['tech'])>= 1260)
    {
      contSupTechSCL2016_2_S2 = contSupTechSCL2016_2_S2+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% TECH SCL2016_2_S2='+contSupTechSCL2016_2_S2);


//(contSupTechSCL2017_1_S2) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en SCL2017_1
var contSupTechSCL2017_1_S2=0;
for ( i=0; i<alumnasSCL20171 ;i++){
  if(data['SCL']['2017-1']['students'][i]['sprints'].length!== 0){
    if ((data['SCL']['2017-1']['students'][i]['sprints'][1]['score']['tech'])>= 1260)
    {
      contSupTechSCL2017_1_S2 = contSupTechSCL2017_1_S2+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% TECH SCL2017_1_S2='+contSupTechSCL2017_1_S2);


//(contSupTechSCL2017_2_S2) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en SCL2017_2
var contSupTechSCL2017_2_S2=0;
for ( i=0; i<alumnasSCL20172 ;i++){
  if(data['SCL']['2017-2']['students'][i]['active']=== true){
    if ((data['SCL']['2017-2']['students'][i]['sprints'][1]['score']['tech'])>= 1260)
    {
      contSupTechSCL2017_2_S2 = contSupTechSCL2017_2_S2+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% TECH SCL2017_2_S2='+contSupTechSCL2017_2_S2);



//*****Para el TERCER sprint TECH
//(contSupTechAQP2016_2_S3) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en AQP2016_2
var contSupTechAQP2016_2_S3=0;
for ( i=0; i<alumnasAQP20162; i++){
  if ((data['AQP']['2016-2']['students'][i]['sprints'][2]['score']['tech'])>= 1260)
   {
    contSupTechAQP2016_2_S3 = contSupTechAQP2016_2_S3+1;
   }
 }
console.log('Alumnas que tienen más de 70% TECH AQP2016_2_S3='+contSupTechAQP2016_2_S3);


//(contSupHseAQP2017_1_S3) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en AQP2017_1
var contSupTechAQP2017_1_S3=0;
for ( i=0; i<alumnasAQP20171 ;i++){
  if ((data['AQP']['2017-1']['students'][i]['sprints'][2]['score']['tech'])>= 1260)
   {
    contSupTechAQP2017_1_S3 = contSupTechAQP2017_1_S3+1;
   }
 }
console.log('Alumnas que tienen más de 70% TECH AQP2017_1_S3='+contSupTechAQP2017_1_S3);


//(contSupHseCDMX2017_1_S3) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en CDMX2017_1
var contSupTechCDMX2017_1_S3=0;
for ( i=0; i<alumnasCDMX20171 ;i++){
  if ((data['CDMX']['2017-1']['students'][i]['sprints'][2]['score']['tech'])>= 1260)
   {
    contSupTechCDMX2017_1_S3 = contSupTechCDMX2017_1_S3+1;
   }
 }
console.log('Alumnas que tienen más de 70% TECH CDMX2017_1_S3='+contSupTechCDMX2017_1_S3);


//(contSupHseSCL2016_2_S3) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en SCL2016_2
var contSupTechSCL2016_2_S3=0;
for ( i=0; i<alumnasSCL20162 ;i++){
  if(data['SCL']['2016-2']['students'][i]['sprints'].length!== 0){
    if ((data['SCL']['2016-2']['students'][i]['sprints'][2]['score']['tech'])>= 1260)
    {
      contSupTechSCL2016_2_S3 = contSupTechSCL2016_2_S3+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% TECH SCL2016_2_S3='+contSupTechSCL2016_2_S3);


//*****Para el CUARTO sprint TECH


//Promedio TECH_S3
var promedioTechS3 =((contSupTechAQP2016_2_S3+contSupTechAQP2017_1_S3+
                    contSupTechCDMX2017_1_S3+
                    contSupTechSCL2016_2_S3)/4);





//(contSupTechAQP2016_2_S4) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en AQP2016_2
var contSupTechAQP2016_2_S4=0;
for ( i=0; i<alumnasAQP20162; i++){
  if ((data['AQP']['2016-2']['students'][i]['sprints'][3]['score']['tech'])>= 1260)
   {
    contSupTechAQP2016_2_S4 = contSupTechAQP2016_2_S4+1;
   }
 }
console.log('Alumnas que tienen más de 70% TECH AQP2016_2_S4='+contSupTechAQP2016_2_S4);
//Promedio TECH_S2
var promedioTechS2 =(((contSupTechAQP2016_2_S2+contSupTechAQP2017_1_S2+
                    contSupTechCDMX2017_1_S2+contSupTechCDMX2017_2_S2+
                    contSupTechLIM2016_2_S2+contSupTechLIM2017_1_S2+contSupTechLIM2017_2_S2+
                    contSupTechSCL2016_2_S2+contSupTechSCL2017_1_S2+contSupTechSCL2017_2_S2))/10);
console.log(promedioTechS2);


//Promedio TECH_S4
var promedioTechS4 =((contSupTechAQP2016_2_S2+
                    contSupTechSCL2016_2_S2)/2);
console.log(promedioTechS2);
//(contSupHseSCL2016_2_S4) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en SCL2016_2
var contSupTechSCL2016_2_S4=0;
for ( i=0; i<alumnasSCL20162 ;i++){
  if(data['SCL']['2016-2']['students'][i]['sprints'].length!== 0){
    if ((data['SCL']['2016-2']['students'][i]['sprints'][3]['score']['tech'])>= 1260)
    {
      contSupTechSCL2016_2_S4 = contSupTechSCL2016_2_S4+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% TECH SCL2016_2_S4='+contSupTechSCL2016_2_S4);


//Promedio TECH_S4
var promedioTechS2 =((contSupTechAQP2016_2_S4+
                    contSupTechSCL2016_2_S4)/2);
//*****Para el primer sprint HSE
//(contSupHseAQP2016_2_S1) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en AQP2016_2
var contSupHseAQP2016_2_S1=0;
for ( i=0; i<alumnasAQP20162 ;i++){
  if ((data['AQP']['2016-2']['students'][i]['sprints'][0]['score']['hse'])>= 840)
   {
    contSupHseAQP2016_2_S1 = contSupHseAQP2016_2_S1+1;
   }
 }
console.log('Alumnas que tienen más de 70% HSE AQP2016_2_S1='+contSupHseAQP2016_2_S1);


//(contSupHseAQP2017_1_S1) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en AQP2017_1
var contSupHseAQP2017_1_S1=0;
for ( i=0; i<alumnasAQP20171 ;i++){
  if ((data['AQP']['2017-1']['students'][i]['sprints'][0]['score']['hse'])>= 840)
   {
    contSupHseAQP2017_1_S1 = contSupHseAQP2017_1_S1+1;
   }
 }
console.log('Alumnas que tienen más de 70% HSE AQP2017_1_S1='+contSupHseAQP2017_1_S1);


//(contSupHseCDMX2017_1_S1) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en CDMX2017_1
var contSupHseCDMX2017_1_S1=0;
for ( i=0; i<alumnasCDMX20171 ;i++){
  if ((data['CDMX']['2017-1']['students'][i]['sprints'][0]['score']['hse'])>= 840)
   {
    contSupHseCDMX2017_1_S1 = contSupHseCDMX2017_1_S1+1;
   }
 }
console.log('Alumnas que tienen más de 70% HSE CDMX2017_1_S1='+contSupHseCDMX2017_1_S1);


//(contSupHseCDMX2017_2_S1) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en CDMX2017_2
var contSupHseCDMX2017_2_S1=0;
for ( i=0; i<alumnasCDMX20172 ;i++){
  if(data['CDMX']['2017-2']['students'][i]['sprints'].length!== 0){
    if ((data['CDMX']['2017-2']['students'][i]['sprints'][0]['score']['hse'])>= 840)
    {
      contSupHseCDMX2017_2_S1 = contSupHseCDMX2017_2_S1+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% HSE CDMX2017_2_S1='+contSupHseCDMX2017_2_S1);


//(contSupHseLIM2016_2_S1) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en LIM2016_2
var contSupHseLIM2016_2_S1=0;
for ( i=0; i<alumnasLIM20162 ;i++){
  if(data['LIM']['2016-2']['students'][i]['sprints'].length!== 0){
    if ((data['LIM']['2016-2']['students'][i]['sprints'][0]['score']['hse'])>= 840)
    {
      contSupHseLIM2016_2_S1 = contSupHseLIM2016_2_S1+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% HSE LIM2016_2_S1='+contSupHseLIM2016_2_S1);


//(contSupHseLIM2017_1_S1) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en LIM2017_1
var contSupHseLIM2017_1_S1=0;
for ( i=0; i<alumnasLIM20171 ;i++){
  if(data['LIM']['2017-1']['students'][i]['sprints'].length!== 0){
    if ((data['LIM']['2017-1']['students'][i]['sprints'][0]['score']['hse'])>= 840)
    {
      contSupHseLIM2017_1_S1 = contSupHseLIM2017_1_S1+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% HSE LIM2017_1_S1='+contSupHseLIM2017_1_S1);


//(contSupHseLIM2017_2_S1) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en LIM2017_2
var contSupHseLIM2017_2_S1=0;
for ( i=0; i<alumnasLIM20172 ;i++){
  if(data['LIM']['2017-2']['students'][i]['sprints'].length!== 0){
    if ((data['LIM']['2017-2']['students'][i]['sprints'][0]['score']['hse'])>= 840)
    {
      contSupHseLIM2017_2_S1 = contSupHseLIM2017_2_S1+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% HSE LIM2017_2_S1='+contSupHseLIM2017_2_S1);
//(contSupHseSCL2016_2_S1) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en SCL2016_2
var contSupHseSCL2016_2_S1=0;
for ( i=0; i<alumnasSCL20162 ;i++){
  if(data['SCL']['2016-2']['students'][i]['sprints'].length!== 0){
    if ((data['SCL']['2016-2']['students'][i]['sprints'][0]['score']['hse'])>= 840)
    {
      contSupHseSCL2016_2_S1 = contSupHseSCL2016_2_S1+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% HSE SCL2016_2_S1='+contSupHseSCL2016_2_S1);


//(contSupHseSCL2017_1_S1) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en SCL2017_1
var contSupHseSCL2017_1_S1=0;
for ( i=0; i<alumnasSCL20171 ;i++){
  if(data['SCL']['2017-1']['students'][i]['sprints'].length!== 0){
    if ((data['SCL']['2017-1']['students'][i]['sprints'][0]['score']['hse'])>= 840)
    {
      contSupHseSCL2017_1_S1 = contSupHseSCL2017_1_S1+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% HSE SCL2017_1_S1='+contSupHseSCL2017_1_S1);


//(contSupHseSCL2017_2_S1) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en SCL2017_2
var contSupHseSCL2017_2_S1=0;
for ( i=0; i<alumnasSCL20172 ;i++){
  if(data['SCL']['2017-2']['students'][i]['active']=== true){
    if ((data['SCL']['2017-2']['students'][i]['sprints'][0]['score']['hse'])>= 840)
    {
      contSupHseSCL2017_2_S1 = contSupHseSCL2017_2_S1+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% HSE SCL2017_2_S1='+contSupHseSCL2017_2_S1);


//*****Para el SEGUNDO sprint HSE
//(contSupHseAQP2016_2_S2) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en AQP2016_2
var contSupHseAQP2016_2_S2=0;
for ( i=0; i<alumnasAQP20162 ;i++){
  if ((data['AQP']['2016-2']['students'][i]['sprints'][1]['score']['hse'])>= 840)
   {
    contSupHseAQP2016_2_S2 = contSupHseAQP2016_2_S2+1;
   }
 }
console.log('Alumnas que tienen más de 70% HSE AQP2016_2_S2='+contSupHseAQP2016_2_S2);


//(contSupHseAQP2017_1_S2) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en AQP2017_1
var contSupHseAQP2017_1_S2=0;
for ( i=0; i<alumnasAQP20171 ;i++){
  if ((data['AQP']['2017-1']['students'][i]['sprints'][1]['score']['hse'])>= 840)
   {
    contSupHseAQP2017_1_S2 = contSupHseAQP2017_1_S2+1;
   }
 }
console.log('Alumnas que tienen más de 70% HSE AQP2017_1_S2='+contSupHseAQP2017_1_S2);


//(contSupHseCDMX2017_1_S2) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en CDMX2017_1
var contSupHseCDMX2017_1_S2=0;
for ( i=0; i<alumnasCDMX20171 ;i++){
  if ((data['CDMX']['2017-1']['students'][i]['sprints'][1]['score']['hse'])>= 840)
   {
    contSupHseCDMX2017_1_S2 = contSupHseCDMX2017_1_S2+1;
   }
 }
console.log('Alumnas que tienen más de 70% HSE CDMX2017_1_S2='+contSupHseCDMX2017_1_S2);


//(contSupHseCDMX2017_2_S2) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en CDMX2017_2
var contSupHseCDMX2017_2_S2=0;
for ( i=0; i<alumnasCDMX20172 ;i++){
  if(data['CDMX']['2017-2']['students'][i]['sprints'].length!== 0){
    if ((data['CDMX']['2017-2']['students'][i]['sprints'][1]['score']['hse'])>= 840)
    {
      contSupHseCDMX2017_2_S2 = contSupHseCDMX2017_2_S2+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% HSE CDMX2017_2_S2='+contSupHseCDMX2017_2_S2);


//(contSupHseLIM2016_2_S2) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en LIM2016_2
var contSupHseLIM2016_2_S2=0;
for ( i=0; i<alumnasLIM20162 ;i++){
  if(data['LIM']['2016-2']['students'][i]['sprints'].length!== 0){
    if ((data['LIM']['2016-2']['students'][i]['sprints'][1]['score']['hse'])>= 840)
    {
      contSupHseLIM2016_2_S2 = contSupHseLIM2016_2_S2+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% HSE LIM2016_2_S2='+contSupHseLIM2016_2_S2);


//(contSupHseLIM2017_1_S2) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en LIM2017_1
var contSupHseLIM2017_1_S2=0;
for ( i=0; i<alumnasLIM20171 ;i++){
  if(data['LIM']['2017-1']['students'][i]['sprints'].length!== 0){
    if ((data['LIM']['2017-1']['students'][i]['sprints'][1]['score']['hse'])>= 840)
    {
      contSupHseLIM2017_1_S2 = contSupHseLIM2017_1_S2+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% HSE LIM2017_1_S2='+contSupHseLIM2017_1_S2);


//(contSupHseLIM2017_2_S2) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en LIM2017_2
var contSupHseLIM2017_2_S2=0;
for ( i=0; i<alumnasLIM20172 ;i++){
  if(data['LIM']['2017-2']['students'][i]['sprints'].length!== 0){
    if ((data['LIM']['2017-2']['students'][i]['sprints'][1]['score']['hse'])>= 840)
    {
      contSupHseLIM2017_2_S2 = contSupHseLIM2017_2_S2+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% HSE LIM2017_2_S2='+contSupHseLIM2017_2_S2);
//(contSupHseSCL2016_2_S2) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en SCL2016_2
var contSupHseSCL2016_2_S2=0;
for ( i=0; i<alumnasSCL20162 ;i++){
  if(data['SCL']['2016-2']['students'][i]['sprints'].length!== 0){
    if ((data['SCL']['2016-2']['students'][i]['sprints'][1]['score']['hse'])>= 840)
    {
      contSupHseSCL2016_2_S2 = contSupHseSCL2016_2_S2+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% HSE SCL2016_2_S2='+contSupHseSCL2016_2_S2);


//(contSupHseSCL2017_1_S2) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en SCL2017_1
var contSupHseSCL2017_1_S2=0;
for ( i=0; i<alumnasSCL20171 ;i++){
  if(data['SCL']['2017-1']['students'][i]['sprints'].length!== 0){
    if ((data['SCL']['2017-1']['students'][i]['sprints'][1]['score']['hse'])>= 840)
    {
      contSupHseSCL2017_1_S2 = contSupHseSCL2017_1_S2+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% HSE SCL2017_1_S2='+contSupHseSCL2017_1_S2);


//(contSupHseSCL2017_2_S2) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en SCL2017_2
var contSupHseSCL2017_2_S2=0;
for ( i=0; i<alumnasSCL20172 ;i++){
  if(data['SCL']['2017-2']['students'][i]['active']=== true){
    if ((data['SCL']['2017-2']['students'][i]['sprints'][1]['score']['hse'])>= 840)
    {
      contSupHseSCL2017_2_S2 = contSupHseSCL2017_2_S2+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% HSE SCL2017_2_S2='+contSupHseSCL2017_2_S2);


//*****Para el TERCER sprint HSE
//(contSupHseAQP2016_2_S3) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en AQP2016_2
var contSupHseAQP2016_2_S3=0;
for ( i=0; i<alumnasAQP20162 ;i++){
  if ((data['AQP']['2016-2']['students'][i]['sprints'][2]['score']['hse'])>= 840)
   {
    contSupHseAQP2016_2_S3 = contSupHseAQP2016_2_S3+1;
   }
 }
console.log('Alumnas que tienen más de 70% HSE AQP2016_2_S3='+contSupHseAQP2016_2_S3);


//(contSupHseAQP2017_1_S3) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en AQP2017_1
var contSupHseAQP2017_1_S3=0;
for ( i=0; i<alumnasAQP20171 ;i++){
  if ((data['AQP']['2017-1']['students'][i]['sprints'][2]['score']['hse'])>= 840)
   {
    contSupHseAQP2017_1_S3 = contSupHseAQP2017_1_S3+1;
   }
 }
console.log('Alumnas que tienen más de 70% HSE AQP2017_1_S3='+contSupHseAQP2017_1_S3);


//(contSupHseCDMX2017_1_S3) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en CDMX2017_1
var contSupHseCDMX2017_1_S3=0;
for ( i=0; i<alumnasCDMX20171 ;i++){
  if ((data['CDMX']['2017-1']['students'][i]['sprints'][2]['score']['hse'])>= 840)
   {
    contSupHseCDMX2017_1_S3 = contSupHseCDMX2017_1_S3+1;
   }
 }
console.log('Alumnas que tienen más de 70% HSE CDMX2017_1_S3='+contSupHseCDMX2017_1_S3);


//(contSupHseSCL2016_2_S3) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en SCL2016_2
var contSupHseSCL2016_2_S3=0;
for ( i=0; i<alumnasSCL20162 ;i++){
  if(data['SCL']['2016-2']['students'][i]['sprints'].length!== 0){
    if ((data['SCL']['2016-2']['students'][i]['sprints'][2]['score']['hse'])>= 840)
    {
      contSupHseSCL2016_2_S3 = contSupHseSCL2016_2_S3+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% HSE SCL2016_2_S3='+contSupHseSCL2016_2_S3);


//*****Para el CUARTO sprint HSE
//(contSupHseAQP2016_2_S4) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en AQP2016_2
var contSupHseAQP2016_2_S4=0;
for ( i=0; i<alumnasAQP20162 ;i++){
  if ((data['AQP']['2016-2']['students'][i]['sprints'][3]['score']['hse'])>= 840)
   {
    contSupHseAQP2016_2_S4 = contSupHseAQP2016_2_S4+1;
   }
 }
console.log('Alumnas que tienen más de 70% HSE AQP2016_2_S4='+contSupHseAQP2016_2_S3);


//(contSupHseSCL2016_2_S4) muestra el número de alumnas que alcanzan un porcentaje mayor al 70% en SCL2016_2
var contSupHseSCL2016_2_S4=0;
for ( i=0; i<alumnasSCL20162 ;i++){
  if(data['SCL']['2016-2']['students'][i]['sprints'].length!== 0){
    if ((data['SCL']['2016-2']['students'][i]['sprints'][3]['score']['hse'])>= 840)
    {
      contSupHseSCL2016_2_S4 = contSupHseSCL2016_2_S4+1;
    }
  }
 }
console.log('Alumnas que tienen más de 70% HSE SCL2016_2_S4='+contSupHseSCL2016_2_S4);
//**********El Net Promoter Score (NPS) promedio de los sprints cursados.
//El NPS se calcula en base a la encuesta que las estudiantes responden al
// respecto de la recomendación que darían de Laboratoria**********
//AQP2016-2
var nps_promoters_AQP2016_2_S1=data['AQP']['2016-2']['ratings'][0]['nps']['promoters'];
var nps_detractors_AQP2016_2_S1=data['AQP']['2016-2']['ratings'][0]['nps']['detractors'];
///Cálculo de NPS-AQP2016-2_S2
var nps_promoters_AQP2016_2_S2=data['AQP']['2016-2']['ratings'][1]['nps']['promoters'];
var nps_detractors_AQP2016_2_S2=data['AQP']['2016-2']['ratings'][1]['nps']['detractors'];
///Cálculo de NPS-AQP2016-2_S3
var nps_promoters_AQP2016_2_S3=data['AQP']['2016-2']['ratings'][2]['nps']['promoters'];
var nps_detractors_AQP2016_2_S3=data['AQP']['2016-2']['ratings'][2]['nps']['detractors'];
///Cálculo de NPS-AQP2016-2_S4
var nps_promoters_AQP2016_2_S4=data['AQP']['2016-2']['ratings'][3]['nps']['promoters'];
var nps_detractors_AQP2016_2_S4=data['AQP']['2016-2']['ratings'][3]['nps']['detractors'];
///(nps_AQP2016_2)Cálculo de NPS total de AQP2016-2
var nps_AQP2016_2=(((nps_promoters_AQP2016_2_S1+ nps_promoters_AQP2016_2_S2+
                    nps_promoters_AQP2016_2_S3+nps_promoters_AQP2016_2_S4)-
                    (nps_detractors_AQP2016_2_S1+ nps_detractors_AQP2016_2_S2+
                    nps_detractors_AQP2016_2_S3+nps_detractors_AQP2016_2_S4))/4);


console.log('NPS total AQP2016_2='+nps_AQP2016_2);


//AQP2017-1
var nps_promoters_AQP2017_1_S1=data['AQP']['2017-1']['ratings'][0]['nps']['promoters'];
var nps_detractors_AQP2017_1_S1=data['AQP']['2017-1']['ratings'][0]['nps']['detractors'];
///Cálculo de NPS_AQP2016-2_S2
var nps_promoters_AQP2017_1_S2=data['AQP']['2017-1']['ratings'][1]['nps']['promoters'];
var nps_detractors_AQP2017_1_S2=data['AQP']['2017-1']['ratings'][1]['nps']['detractors'];
///Cálculo de NPS_AQP2017_1_S3
var nps_promoters_AQP2017_1_S3=data['AQP']['2017-1']['ratings'][2]['nps']['promoters'];
var nps_detractors_AQP2017_1_S3=data['AQP']['2017-1']['ratings'][2]['nps']['detractors'];
///(nps_AQP2016_2)Cálculo de NPS total de AQP2016-2
var nps_AQP2017_1=(((nps_promoters_AQP2017_1_S1+ nps_promoters_AQP2017_1_S2+
                    nps_promoters_AQP2017_1_S3)-
                    (nps_detractors_AQP2017_1_S1+ nps_detractors_AQP2017_1_S2+
                    nps_detractors_AQP2017_1_S3))/3);


console.log('NPS total AQP2017_1='+nps_AQP2017_1);


//CDMX2017-1
var nps_promoters_CDMX2017_1_S1=data['CDMX']['2017-1']['ratings'][0]['nps']['promoters'];
var nps_detractors_CDMX2017_1_S1=data['CDMX']['2017-1']['ratings'][0]['nps']['detractors'];
///Cálculo de NPS-CDMX2017_1_S2
var nps_promoters_CDMX2017_1_S2=data['CDMX']['2017-1']['ratings'][1]['nps']['promoters'];
var nps_detractors_CDMX2017_1_S2=data['CDMX']['2017-1']['ratings'][1]['nps']['detractors'];
///Cálculo de NPS-CDMX2017_1_S3
var nps_promoters_CDMX2017_1_S3=data['CDMX']['2017-1']['ratings'][2]['nps']['promoters'];
var nps_detractors_CDMX2017_1_S3=data['CDMX']['2017-1']['ratings'][2]['nps']['detractors'];
///(nps_CDMX2017_1)Cálculo de NPS total de CDMX2017_1
var nps_CDMX2017_1=(((nps_promoters_CDMX2017_1_S1+ nps_promoters_CDMX2017_1_S2+
                    nps_promoters_CDMX2017_1_S3)-
                    (nps_detractors_CDMX2017_1_S1+ nps_detractors_CDMX2017_1_S2+
                    nps_detractors_CDMX2017_1_S3))/3);


console.log('NPS total CDMX2017_1='+nps_CDMX2017_1);


//CDMX2017-2
var nps_promoters_CDMX2017_2_S1=data['CDMX']['2017-2']['ratings'][0]['nps']['promoters'];
var nps_detractors_CDMX2017_2_S1=data['CDMX']['2017-2']['ratings'][0]['nps']['detractors'];
///Cálculo de NPS-CDMX2017_2_S2
var nps_promoters_CDMX2017_2_S2=data['CDMX']['2017-2']['ratings'][1]['nps']['promoters'];
var nps_detractors_CDMX2017_2_S2=data['CDMX']['2017-2']['ratings'][1]['nps']['detractors'];


///(nps_CDMX2017_2)Cálculo de NPS total de CDMX2017_1
var nps_CDMX2017_2=(((nps_promoters_CDMX2017_2_S1+ nps_promoters_CDMX2017_2_S2)-
                    (nps_detractors_CDMX2017_2_S1+ nps_detractors_CDMX2017_2_S2))/2);


console.log('NPS total CDMX2017_2='+nps_CDMX2017_2);


//LIM_2016_2
var nps_promoters_LIM_2016_2_S1=data['LIM']['2016-2']['ratings'][0]['nps']['promoters'];
var nps_detractors_LIM_2016_2_S1=data['LIM']['2016-2']['ratings'][0]['nps']['detractors'];
///Cálculo de NPS-LIM_2016_2_S2
var nps_promoters_LIM_2016_2_S2=data['LIM']['2016-2']['ratings'][1]['nps']['promoters'];
var nps_detractors_LIM_2016_2_S2=data['LIM']['2016-2']['ratings'][1]['nps']['detractors'];


///(nps_LIM_2016_2)Cálculo de NPS total de LIM_2016_2
var nps_LIM2016_2=(((nps_promoters_LIM_2016_2_S1+ nps_promoters_LIM_2016_2_S2)-
                    (nps_detractors_LIM_2016_2_S1+ nps_detractors_LIM_2016_2_S2))/2);


console.log('NPS total LIM2016_2='+nps_LIM2016_2);


//LIM_2017_1
var nps_promoters_LIM_2017_1_S1=data['LIM']['2017-1']['ratings'][0]['nps']['promoters'];
var nps_detractors_LIM_2017_1_S1=data['LIM']['2017-1']['ratings'][0]['nps']['detractors'];
///Cálculo de NPS-LIM_2017_1_S2
var nps_promoters_LIM_2017_1_S2=data['LIM']['2017-1']['ratings'][1]['nps']['promoters'];
var nps_detractors_LIM_2017_1_S2=data['LIM']['2017-1']['ratings'][1]['nps']['detractors'];
///Cálculo de NPS-LIM_2017_1_S3
var nps_promoters_LIM_2017_1_S3=data['LIM']['2017-1']['ratings'][2]['nps']['promoters'];
var nps_detractors_LIM_2017_1_S3=data['LIM']['2017-1']['ratings'][2]['nps']['detractors'];
///Cálculo de NPS-LIM_2017_1_S4
var nps_promoters_LIM_2017_1_S4=data['LIM']['2017-1']['ratings'][3]['nps']['promoters'];
var nps_detractors_LIM_2017_1_S4=data['LIM']['2017-1']['ratings'][3]['nps']['detractors'];


///(nps_LIM_2017_1)Cálculo de NPS total de LIM2017_1
var nps_LIM2017_1=(((nps_promoters_LIM_2017_1_S1+ nps_promoters_LIM_2017_1_S2+
                    nps_promoters_LIM_2017_1_S3+ nps_promoters_LIM_2017_1_S4)-
                    (nps_detractors_LIM_2017_1_S1+ nps_detractors_LIM_2017_1_S2+
                    nps_detractors_LIM_2017_1_S3+ nps_detractors_LIM_2017_1_S4))/4);


console.log('NPS total LIM2017_1='+nps_LIM2017_1);


//LIM_2017_2
var nps_promoters_LIM_2017_2_S1=data['LIM']['2017-2']['ratings'][0]['nps']['promoters'];
var nps_detractors_LIM_2017_2_S1=data['LIM']['2017-2']['ratings'][0]['nps']['detractors'];
///Cálculo de NPS-LIM_2017_2_S2
var nps_promoters_LIM_2017_2_S2=data['LIM']['2017-2']['ratings'][1]['nps']['promoters'];
var nps_detractors_LIM_2017_2_S2=data['LIM']['2017-2']['ratings'][1]['nps']['detractors'];


///(nps_LIM_2017_2)Cálculo de NPS total de LIM2017_1
var nps_LIM2017_2=(((nps_promoters_LIM_2017_2_S1+ nps_promoters_LIM_2017_2_S2)-
                    (nps_detractors_LIM_2017_2_S1+ nps_detractors_LIM_2017_2_S2))/2);


console.log('NPS total LIM2017_2='+nps_LIM2017_2);


//SCL_2016_2
var nps_promoters_SCL_2016_2_S1=data['SCL']['2016-2']['ratings'][0]['nps']['promoters'];
var nps_detractors_SCL_2016_2_S1=data['SCL']['2016-2']['ratings'][0]['nps']['detractors'];
///Cálculo de NPS-SCL_2016_2_S2
var nps_promoters_SCL_2016_2_S2=data['SCL']['2016-2']['ratings'][1]['nps']['promoters'];
var nps_detractors_SCL_2016_2_S2=data['SCL']['2016-2']['ratings'][1]['nps']['detractors'];
///Cálculo de NPS-SCL_2016_2_S3
var nps_promoters_SCL_2016_2_S3=data['SCL']['2016-2']['ratings'][2]['nps']['promoters'];
var nps_detractors_SCL_2016_2_S3=data['SCL']['2016-2']['ratings'][2]['nps']['detractors'];
///Cálculo de NPS-SCL_2016_2_S4
var nps_promoters_SCL_2016_2_S4=data['SCL']['2016-2']['ratings'][3]['nps']['promoters'];
var nps_detractors_SCL_2016_2_S4=data['SCL']['2016-2']['ratings'][3]['nps']['detractors'];


///(nps_SCL_2016_2)Cálculo de NPS total de SCL2016_2
var nps_SCL2016_2=(((nps_promoters_SCL_2016_2_S1+ nps_promoters_SCL_2016_2_S2+
                    nps_promoters_SCL_2016_2_S3+ nps_promoters_SCL_2016_2_S4)-
                    (nps_detractors_SCL_2016_2_S1+ nps_detractors_SCL_2016_2_S2+
                    nps_detractors_SCL_2016_2_S3+ nps_detractors_SCL_2016_2_S4))/4);


console.log('NPS total SCL2016_2='+nps_SCL2016_2);


//SCL_2017_1
var nps_promoters_SCL_2017_1_S1=data['SCL']['2017-1']['ratings'][0]['nps']['promoters'];
var nps_detractors_SCL_2017_1_S1=data['SCL']['2017-1']['ratings'][0]['nps']['detractors'];
///Cálculo de NPS-SCL_2017_1_S2
var nps_promoters_SCL_2017_1_S2=data['SCL']['2017-1']['ratings'][1]['nps']['promoters'];
var nps_detractors_SCL_2017_1_S2=data['SCL']['2017-1']['ratings'][1]['nps']['detractors'];
///Cálculo de NPS-SCL_2017_1_S3
var nps_promoters_SCL_2017_1_S3=data['SCL']['2017-1']['ratings'][2]['nps']['promoters'];
var nps_detractors_SCL_2017_1_S3=data['SCL']['2017-1']['ratings'][2]['nps']['detractors'];



///(nps_SCL_2017_1)Cálculo de NPS total de SCL2017_1
var nps_SCL2017_1=(((nps_promoters_SCL_2017_1_S1+ nps_promoters_SCL_2017_1_S2+
                    nps_promoters_SCL_2017_1_S3)-
                    (nps_detractors_SCL_2017_1_S1+ nps_detractors_SCL_2017_1_S2+
                    nps_detractors_SCL_2017_1_S3))/3);


console.log('NPS total SCL2017_1='+nps_SCL2017_1);


//SCL_2017_2
var nps_promoters_SCL_2017_2_S1=data['SCL']['2017-2']['ratings'][0]['nps']['promoters'];
var nps_detractors_SCL_2017_2_S1=data['SCL']['2017-2']['ratings'][0]['nps']['detractors'];
///Cálculo de NPS-SCL_2017_2_S2
var nps_promoters_SCL_2017_2_S2=data['SCL']['2017-2']['ratings'][1]['nps']['promoters'];
var nps_detractors_SCL_2017_2_S2=data['SCL']['2017-2']['ratings'][1]['nps']['detractors'];





///(nps_SCL_2017_2)Cálculo de NPS total de SCL2017_2
var nps_SCL2017_2=(((nps_promoters_SCL_2017_2_S1+ nps_promoters_SCL_2017_2_S2)-
                    (nps_detractors_SCL_2017_2_S1+ nps_detractors_SCL_2017_2_S2))/2);


console.log('NPS total SCL2017_2='+nps_SCL2017_2);


//**********El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.*********
//*****AQP2016_2
var contSupExperienceAQP2016_2_S1=(data['AQP']['2016-2']['ratings'][0]['student']['supera']);
var contSupExperienceAQP2016_2_S2=(data['AQP']['2016-2']['ratings'][1]['student']['supera']);
var contSupExperienceAQP2016_2_S3=(data['AQP']['2016-2']['ratings'][2]['student']['supera']);
var contSupExperienceAQP2016_2_S4=(data['AQP']['2016-2']['ratings'][3]['student']['supera']);
console.log('estudiantes satisfechas con la experiencia de Laboratoria AQP2016_2 s1='+contSupExperienceAQP2016_2_S1);
console.log('estudiantes satisfechas con la experiencia de Laboratoria AQP2016_2 s2='+contSupExperienceAQP2016_2_S2);
console.log('estudiantes satisfechas con la experiencia de Laboratoria AQP2016_2 s3='+contSupExperienceAQP2016_2_S3);
console.log('estudiantes satisfechas con la experiencia de Laboratoria AQP2016_2 s4='+contSupExperienceAQP2016_2_S4);
//*****AQP2017_1
var contSupExperienceAQP2017_1_S1=(data['AQP']['2017-1']['ratings'][0]['student']['supera']);
var contSupExperienceAQP2017_1_S2=(data['AQP']['2017-1']['ratings'][1]['student']['supera']);
var contSupExperienceAQP2017_1_S3=(data['AQP']['2017-1']['ratings'][2]['student']['supera']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria AQP2017_1 s1='+contSupExperienceAQP2017_1_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria AQP2017_1 s2='+contSupExperienceAQP2017_1_S2);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria AQP2017_1 s3='+contSupExperienceAQP2017_1_S3);






//*****CDMX2017_1
var contSupExperienceCDMX2017_1_S1=(data['CDMX']['2017-1']['ratings'][0]['student']['supera']);
var contSupExperienceCDMX2017_1_S2=(data['CDMX']['2017-1']['ratings'][1]['student']['supera']);
var contSupExperienceCDMX2017_1_S3=(data['CDMX']['2017-1']['ratings'][2]['student']['supera']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria CDMX2017_1 s1='+contSupExperienceCDMX2017_1_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria CDMX2017_1 s2='+contSupExperienceCDMX2017_1_S2);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria CDMX2017_1 s3='+contSupExperienceCDMX2017_1_S3);


//*****CDMX2017_2
var contSupExperienceCDMX2017_2_S1=(data['CDMX']['2017-2']['ratings'][0]['student']['supera']);
var contSupExperienceCDMX2017_2_S2=(data['CDMX']['2017-2']['ratings'][1]['student']['supera']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria CDMX2017_2 s1='+contSupExperienceCDMX2017_2_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria CDMX2017_2 s2='+contSupExperienceCDMX2017_2_S2);


//*****LIM2016_2
var contSupExperienceLIM2016_2_S1=(data['LIM']['2016-2']['ratings'][0]['student']['supera']);
var contSupExperienceLIM2016_2_S2=(data['LIM']['2016-2']['ratings'][1]['student']['supera']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2016_2 s1='+contSupExperienceLIM2016_2_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2016_2 s2='+contSupExperienceLIM2016_2_S2);


//*****LIM2017_1
var contSupExperienceLIM2017_1_S1=(data['LIM']['2017-1']['ratings'][0]['student']['supera']);
var contSupExperienceLIM2017_1_S2=(data['LIM']['2017-1']['ratings'][1]['student']['supera']);
var contSupExperienceLIM2017_1_S3=(data['LIM']['2017-1']['ratings'][2]['student']['supera']);
var contSupExperienceLIM2017_1_S4=(data['LIM']['2017-1']['ratings'][3]['student']['supera']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2017_1 s1='+contSupExperienceLIM2017_1_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2017_1 s2='+contSupExperienceLIM2017_1_S2);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2017_1 s3='+contSupExperienceLIM2017_1_S3);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2017_1 s4='+contSupExperienceLIM2017_1_S4);


//*****LIM2017_2
var contSupExperienceLIM2017_2_S1=(data['LIM']['2017-2']['ratings'][0]['student']['supera']);
var contSupExperienceLIM2017_2_S2=(data['LIM']['2017-2']['ratings'][1]['student']['supera']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2017_2 s1='+contSupExperienceLIM2017_2_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2017_2 s2='+contSupExperienceLIM2017_2_S2);


//*****SCL2016_2
var contSupExperienceSCL2016_2_S1=(data['SCL']['2016-2']['ratings'][0]['student']['supera']);
var contSupExperienceSCL2016_2_S2=(data['SCL']['2016-2']['ratings'][1]['student']['supera']);
var contSupExperienceSCL2016_2_S3=(data['SCL']['2016-2']['ratings'][2]['student']['supera']);
var contSupExperienceSCL2016_2_S4=(data['SCL']['2016-2']['ratings'][3]['student']['supera']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2016_2 s1='+contSupExperienceSCL2016_2_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2016_2 s2='+contSupExperienceSCL2016_2_S2);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2016_2 s3='+contSupExperienceSCL2016_2_S3);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2016_2 s4='+contSupExperienceSCL2016_2_S4);


//*****SCL2017_1
var contSupExperienceSCL2017_1_S1=(data['SCL']['2017-1']['ratings'][0]['student']['supera']);
var contSupExperienceSCL2017_1_S2=(data['SCL']['2017-1']['ratings'][1]['student']['supera']);
var contSupExperienceSCL2017_1_S3=(data['SCL']['2017-1']['ratings'][2]['student']['supera']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2017_1 s1='+contSupExperienceSCL2017_1_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2017_1 s2='+contSupExperienceSCL2017_1_S2);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2017_1 s3='+contSupExperienceSCL2017_1_S3);


//*****SCL2017_2
var contSupExperienceSCL2017_2_S1=(data['SCL']['2017-2']['ratings'][0]['student']['supera']);
var contSupExperienceSCL2017_2_S2=(data['SCL']['2017-2']['ratings'][1]['student']['supera']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2017_2 s1='+contSupExperienceSCL2017_2_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2017_2 s2='+contSupExperienceSCL2017_2_S2);


//**********El porcentaje de estudiantes 'cumple' con la experiencia de Laboratoria.*********
//*****AQP2016_2
var contCumpleExperienceAQP2016_2_S1=(data['AQP']['2016-2']['ratings'][0]['student']['cumple']);
var contCumpleExperienceAQP2016_2_S2=(data['AQP']['2016-2']['ratings'][1]['student']['cumple']);
var contCumpleExperienceAQP2016_2_S3=(data['AQP']['2016-2']['ratings'][2]['student']['cumple']);
var contCumpleExperienceAQP2016_2_S4=(data['AQP']['2016-2']['ratings'][3]['student']['cumple']);
console.log('estudiantes satisfechas con la experiencia de Laboratoria AQP2016_2 s1='+contCumpleExperienceAQP2016_2_S1);
console.log('estudiantes satisfechas con la experiencia de Laboratoria AQP2016_2 s2='+contCumpleExperienceAQP2016_2_S2);
console.log('estudiantes satisfechas con la experiencia de Laboratoria AQP2016_2 s3='+contCumpleExperienceAQP2016_2_S3);
console.log('estudiantes satisfechas con la experiencia de Laboratoria AQP2016_2 s4='+contCumpleExperienceAQP2016_2_S4);
//*****AQP2017_1
var contCumpleExperienceAQP2017_1_S1=(data['AQP']['2017-1']['ratings'][0]['student']['cumple']);
var contCumpleExperienceAQP2017_1_S2=(data['AQP']['2017-1']['ratings'][1]['student']['cumple']);
var contCumpleExperienceAQP2017_1_S3=(data['AQP']['2017-1']['ratings'][2]['student']['cumple']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria AQP2017_1 s1='+contCumpleExperienceAQP2017_1_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria AQP2017_1 s2='+contCumpleExperienceAQP2017_1_S2);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria AQP2017_1 s3='+contCumpleExperienceAQP2017_1_S3);


//*****CDMX2017_1
var contCumpleExperienceCDMX2017_1_S1=(data['CDMX']['2017-1']['ratings'][0]['student']['cumple']);
var contCumpleExperienceCDMX2017_1_S2=(data['CDMX']['2017-1']['ratings'][1]['student']['cumple']);
var contCumpleExperienceCDMX2017_1_S3=(data['CDMX']['2017-1']['ratings'][2]['student']['cumple']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria CDMX2017_1 s1='+contCumpleExperienceCDMX2017_1_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria CDMX2017_1 s2='+contCumpleExperienceCDMX2017_1_S2);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria CDMX2017_1 s3='+contCumpleExperienceCDMX2017_1_S3);


//*****CDMX2017_2
var contCumpleExperienceCDMX2017_2_S1=(data['CDMX']['2017-2']['ratings'][0]['student']['cumple']);
var contCumpleExperienceCDMX2017_2_S2=(data['CDMX']['2017-2']['ratings'][1]['student']['cumple']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria CDMX2017_2 s1='+contCumpleExperienceCDMX2017_2_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria CDMX2017_2 s2='+contCumpleExperienceCDMX2017_2_S2);


//*****LIM2016_2
var contCumpleExperienceLIM2016_2_S1=(data['LIM']['2016-2']['ratings'][0]['student']['cumple']);
var contCumpleExperienceLIM2016_2_S2=(data['LIM']['2016-2']['ratings'][1]['student']['cumple']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2016_2 s1='+contCumpleExperienceLIM2016_2_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2016_2 s2='+contCumpleExperienceLIM2016_2_S2);


//*****LIM2017_1
var contCumpleExperienceLIM2017_1_S1=(data['LIM']['2017-1']['ratings'][0]['student']['cumple']);
var contCumpleExperienceLIM2017_1_S2=(data['LIM']['2017-1']['ratings'][1]['student']['cumple']);
var contCumpleExperienceLIM2017_1_S3=(data['LIM']['2017-1']['ratings'][2]['student']['cumple']);
var contCumpleExperienceLIM2017_1_S4=(data['LIM']['2017-1']['ratings'][3]['student']['cumple']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2017_1 s1='+contCumpleExperienceLIM2017_1_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2017_1 s2='+contCumpleExperienceLIM2017_1_S2);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2017_1 s3='+contCumpleExperienceLIM2017_1_S3);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2017_1 s4='+contCumpleExperienceLIM2017_1_S4);


//*****LIM2017_2
var contCumpleExperienceLIM2017_2_S1=(data['LIM']['2017-2']['ratings'][0]['student']['cumple']);
var contCumpleExperienceLIM2017_2_S2=(data['LIM']['2017-2']['ratings'][1]['student']['cumple']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2017_2 s1='+contCumpleExperienceLIM2017_2_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2017_2 s2='+contCumpleExperienceLIM2017_2_S2);


//*****SCL2016_2
var contCumpleExperienceSCL2016_2_S1=(data['SCL']['2016-2']['ratings'][0]['student']['cumple']);
var contCumpleExperienceSCL2016_2_S2=(data['SCL']['2016-2']['ratings'][1]['student']['cumple']);
var contCumpleExperienceSCL2016_2_S3=(data['SCL']['2016-2']['ratings'][2]['student']['cumple']);
var contCumpleExperienceSCL2016_2_S4=(data['SCL']['2016-2']['ratings'][3]['student']['cumple']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2016_2 s1='+contCumpleExperienceSCL2016_2_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2016_2 s2='+contCumpleExperienceSCL2016_2_S2);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2016_2 s3='+contCumpleExperienceSCL2016_2_S3);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2016_2 s4='+contCumpleExperienceSCL2016_2_S4);


//*****SCL2017_1
var contCumpleExperienceSCL2017_1_S1=(data['SCL']['2017-1']['ratings'][0]['student']['cumple']);
var contCumpleExperienceSCL2017_1_S2=(data['SCL']['2017-1']['ratings'][1]['student']['cumple']);
var contCumpleExperienceSCL2017_1_S3=(data['SCL']['2017-1']['ratings'][2]['student']['cumple']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2017_1 s1='+contCumpleExperienceSCL2017_1_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2017_1 s2='+contCumpleExperienceSCL2017_1_S2);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2017_1 s3='+contCumpleExperienceSCL2017_1_S3);


//*****SCL2017_2
var contCumpleExperienceSCL2017_2_S1=(data['SCL']['2017-2']['ratings'][0]['student']['cumple']);
var contCumpleExperienceSCL2017_2_S2=(data['SCL']['2017-2']['ratings'][1]['student']['cumple']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2017_2 s1='+contCumpleExperienceSCL2017_2_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2017_2 s2='+contCumpleExperienceSCL2017_2_S2);


//**********El porcentaje de estudiantes 'NOcumple' con la experiencia de Laboratoria.*********
//*****AQP2016_2
var contNoCumpleExperienceAQP2016_2_S1=(data['AQP']['2016-2']['ratings'][0]['student']['no-cumple']);
var contNoCumpleExperienceAQP2016_2_S2=(data['AQP']['2016-2']['ratings'][1]['student']['no-cumple']);
var contNoCumpleExperienceAQP2016_2_S3=(data['AQP']['2016-2']['ratings'][2]['student']['no-cumple']);
var contNoCumpleExperienceAQP2016_2_S4=(data['AQP']['2016-2']['ratings'][3]['student']['no-cumple']);
console.log('estudiantes satisfechas con la experiencia de Laboratoria AQP2016_2 s1='+contNoCumpleExperienceAQP2016_2_S1);
console.log('estudiantes satisfechas con la experiencia de Laboratoria AQP2016_2 s2='+contNoCumpleExperienceAQP2016_2_S2);
console.log('estudiantes satisfechas con la experiencia de Laboratoria AQP2016_2 s3='+contNoCumpleExperienceAQP2016_2_S3);
console.log('estudiantes satisfechas con la experiencia de Laboratoria AQP2016_2 s4='+contNoCumpleExperienceAQP2016_2_S4);
//*****AQP2017_1
var contNoCumpleExperienceAQP2017_1_S1=(data['AQP']['2017-1']['ratings'][0]['student']['no-cumple']);
var contNoCumpleExperienceAQP2017_1_S2=(data['AQP']['2017-1']['ratings'][1]['student']['no-cumple']);
var contNoCumpleExperienceAQP2017_1_S3=(data['AQP']['2017-1']['ratings'][2]['student']['no-cumple']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria AQP2017_1 s1='+contNoCumpleExperienceAQP2017_1_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria AQP2017_1 s2='+contNoCumpleExperienceAQP2017_1_S2);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria AQP2017_1 s3='+contNoCumpleExperienceAQP2017_1_S3);


//*****CDMX2017_1
var contNoCumpleExperienceCDMX2017_1_S1=(data['CDMX']['2017-1']['ratings'][0]['student']['no-cumple']);
var contNoCumpleExperienceCDMX2017_1_S2=(data['CDMX']['2017-1']['ratings'][1]['student']['no-cumple']);
var contNoCumpleExperienceCDMX2017_1_S3=(data['CDMX']['2017-1']['ratings'][2]['student']['no-cumple']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria CDMX2017_1 s1='+contNoCumpleExperienceCDMX2017_1_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria CDMX2017_1 s2='+contNoCumpleExperienceCDMX2017_1_S2);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria CDMX2017_1 s3='+contNoCumpleExperienceCDMX2017_1_S3);


//*****CDMX2017_2
var contNoCumpleExperienceCDMX2017_2_S1=(data['CDMX']['2017-2']['ratings'][0]['student']['no-cumple']);
var contNoCumpleExperienceCDMX2017_2_S2=(data['CDMX']['2017-2']['ratings'][1]['student']['no-cumple']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria CDMX2017_2 s1='+contNoCumpleExperienceCDMX2017_2_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria CDMX2017_2 s2='+contNoCumpleExperienceCDMX2017_2_S2);


//*****LIM2016_2
var contNoCumpleExperienceLIM2016_2_S1=(data['LIM']['2016-2']['ratings'][0]['student']['no-cumple']);
var contNoCumpleExperienceLIM2016_2_S2=(data['LIM']['2016-2']['ratings'][1]['student']['no-cumple']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2016_2 s1='+contNoCumpleExperienceLIM2016_2_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2016_2 s2='+contNoCumpleExperienceLIM2016_2_S2);


//*****LIM2017_1
var contNoCumpleExperienceLIM2017_1_S1=(data['LIM']['2017-1']['ratings'][0]['student']['no-cumple']);
var contNoCumpleExperienceLIM2017_1_S2=(data['LIM']['2017-1']['ratings'][1]['student']['no-cumple']);
var contNoCumpleExperienceLIM2017_1_S3=(data['LIM']['2017-1']['ratings'][2]['student']['no-cumple']);
var contNoCumpleExperienceLIM2017_1_S4=(data['LIM']['2017-1']['ratings'][3]['student']['no-cumple']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2017_1 s1='+contNoCumpleExperienceLIM2017_1_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2017_1 s2='+contNoCumpleExperienceLIM2017_1_S2);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2017_1 s3='+contNoCumpleExperienceLIM2017_1_S3);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2017_1 s4='+contNoCumpleExperienceLIM2017_1_S4);


//*****LIM2017_2
var contNoCumpleExperienceLIM2017_2_S1=(data['LIM']['2017-2']['ratings'][0]['student']['no-cumple']);
var contNoCumpleExperienceLIM2017_2_S2=(data['LIM']['2017-2']['ratings'][1]['student']['no-cumple']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2017_2 s1='+contNoCumpleExperienceLIM2017_2_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria LIM2017_2 s2='+contNoCumpleExperienceLIM2017_2_S2);


//*****SCL2016_2
var contNoCumpleExperienceSCL2016_2_S1=(data['SCL']['2016-2']['ratings'][0]['student']['no-cumple']);
var contNoCumpleExperienceSCL2016_2_S2=(data['SCL']['2016-2']['ratings'][1]['student']['no-cumple']);
var contNoCumpleExperienceSCL2016_2_S3=(data['SCL']['2016-2']['ratings'][2]['student']['no-cumple']);
var contNoCumpleExperienceSCL2016_2_S4=(data['SCL']['2016-2']['ratings'][3]['student']['no-cumple']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2016_2 s1='+contNoCumpleExperienceSCL2016_2_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2016_2 s2='+contNoCumpleExperienceSCL2016_2_S2);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2016_2 s3='+contNoCumpleExperienceSCL2016_2_S3);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2016_2 s4='+contNoCumpleExperienceSCL2016_2_S4);


//*****SCL2017_1
var contNoCumpleExperienceSCL2017_1_S1=(data['SCL']['2017-1']['ratings'][0]['student']['no-cumple']);
var contNoCumpleExperienceSCL2017_1_S2=(data['SCL']['2017-1']['ratings'][1]['student']['no-cumple']);
var contNoCumpleExperienceSCL2017_1_S3=(data['SCL']['2017-1']['ratings'][2]['student']['no-cumple']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2017_1 s1='+contNoCumpleExperienceSCL2017_1_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2017_1 s2='+contNoCumpleExperienceSCL2017_1_S2);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2017_1 s3='+contNoCumpleExperienceSCL2017_1_S3);


//*****SCL2017_2
var contNoCumpleExperienceSCL2017_2_S1=(data['SCL']['2017-2']['ratings'][0]['student']['no-cumple']);
var contNoCumpleExperienceSCL2017_2_S2=(data['SCL']['2017-2']['ratings'][1]['student']['no-cumple']);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2017_2 s1='+contNoCumpleExperienceSCL2017_2_S1);
console.log('% de estudiantes satisfechas con la experiencia de Laboratoria SCL2017_2 s2='+contNoCumpleExperienceSCL2017_2_S2);








//**********La puntuación promedio de l@s profesores.**********


//*****AQP2016_2
var pointsTeacherAQP2016_2_S1=(data['AQP']['2016-2']['ratings'][0]['teacher']);
var pointsTeacherAQP2016_2_S2=(data['AQP']['2016-2']['ratings'][1]['teacher']);
var pointsTeacherAQP2016_2_S3=(data['AQP']['2016-2']['ratings'][2]['teacher']);
var pointsTeacherAQP2016_2_S4=(data['AQP']['2016-2']['ratings'][3]['teacher']);
var pointsTeacherAQP2016_2=pointsTeacherAQP2016_2_S1+
                           pointsTeacherAQP2016_2_S2+
                           pointsTeacherAQP2016_2_S3+
                           pointsTeacherAQP2016_2_S4;
var averagePointsTeacherAQP2016_2=pointsTeacherAQP2016_2/4;
console.log('Puntos por Teacher AQP2016_2 s1='+pointsTeacherAQP2016_2_S1);
console.log('Puntos por Teacher AQP2016_2 s2='+pointsTeacherAQP2016_2_S2);
console.log('Puntos por Teacher AQP2016_2 s3='+pointsTeacherAQP2016_2_S3);
console.log('Puntos por Teacher AQP2016_2 s4='+pointsTeacherAQP2016_2_S4);
console.log('Puntos PROMEDIO por Teacher AQP2016_2 TOTALES='+averagePointsTeacherAQP2016_2);
//*****AQP2017_1
var pointsTeacherAQP2017_1_S1=(data['AQP']['2017-1']['ratings'][0]['teacher']);
var pointsTeacherAQP2017_1_S2=(data['AQP']['2017-1']['ratings'][1]['teacher']);
var pointsTeacherAQP2017_1_S3=(data['AQP']['2017-1']['ratings'][2]['teacher']);
var pointsTeacherAQP2017_1=pointsTeacherAQP2017_1_S1+
                           pointsTeacherAQP2017_1_S2+
                           pointsTeacherAQP2017_1_S3;
var averagePointsTeacherAQP2017_1=pointsTeacherAQP2017_1/3;
console.log('Puntos por Teacher AQP2017_1 s1='+pointsTeacherAQP2017_1_S1);
console.log('Puntos por Teacher AQP2017_1 s2='+pointsTeacherAQP2017_1_S2);
console.log('Puntos por Teacher AQP2017_1 s3='+pointsTeacherAQP2017_1_S3);
console.log('Puntos PROMEDIO por Teacher AQP2017_1='+averagePointsTeacherAQP2017_1);


//*****CDMX2017_1
var pointsTeacherCDMX2017_1_S1=(data['CDMX']['2017-1']['ratings'][0]['teacher']);
var pointsTeacherCDMX2017_1_S2=(data['CDMX']['2017-1']['ratings'][1]['teacher']);
var pointsTeacherCDMX2017_1_S3=(data['CDMX']['2017-1']['ratings'][2]['teacher']);
var pointsTeacherCDMX2017_1=pointsTeacherCDMX2017_1_S1+
                            pointsTeacherCDMX2017_1_S2+
                            pointsTeacherCDMX2017_1_S3;
var averagePointsTeacherCDMX2017_1=pointsTeacherCDMX2017_1/3;
console.log('Puntos por Teacher CDMX2017_1 s1='+pointsTeacherCDMX2017_1_S1);
console.log('Puntos por Teacher CDMX2017_1 s2='+pointsTeacherCDMX2017_1_S2);
console.log('Puntos por Teacher CDMX2017_1 s3='+pointsTeacherCDMX2017_1_S3);
console.log('Puntos por Teacher PROMEDIO CDMX2017_1='+averagePointsTeacherCDMX2017_1);


//*****CDMX2017_2
var pointsTeacherCDMX2017_2_S1=(data['CDMX']['2017-2']['ratings'][0]['teacher']);
var pointsTeacherCDMX2017_2_S2=(data['CDMX']['2017-2']['ratings'][1]['teacher']);
var pointsTeacherCDMX2017_2=pointsTeacherCDMX2017_2_S1+
                            pointsTeacherCDMX2017_2_S2;
var averagePointsTeacherCDMX2017_2=pointsTeacherCDMX2017_2/2;
console.log('Puntos por Teacher CDMX2017_2 s1='+pointsTeacherCDMX2017_2_S1);
console.log('Puntos por Teacher CDMX2017_2 s2='+pointsTeacherCDMX2017_2_S2);
console.log('Puntos por Teacher PROMEDIO CDMX2017_2='+averagePointsTeacherCDMX2017_2);


//*****LIM2016_2
var pointsTeacherLIM2016_2_S1=(data['LIM']['2016-2']['ratings'][0]['teacher']);
var pointsTeacherLIM2016_2_S2=(data['LIM']['2016-2']['ratings'][1]['teacher']);
var pointsTeacherLIM2016_2=pointsTeacherLIM2016_2_S1+
                           pointsTeacherLIM2016_2_S2;
var averagePointsTeacherLIM2016_2=pointsTeacherLIM2016_2/2;
console.log('Puntos por Teacher LIM2016_2 s1='+pointsTeacherLIM2016_2_S1);
console.log('Puntos por Teacher LIM2016_2 s2='+pointsTeacherLIM2016_2_S2);
console.log('Puntos por Teacher PROMEDIO LIM 2016_2='+averagePointsTeacherLIM2016_2);


//*****LIM2017_1
var pointsTeacherLIM2017_1_S1=(data['LIM']['2017-1']['ratings'][0]['teacher']);
var pointsTeacherLIM2017_1_S2=(data['LIM']['2017-1']['ratings'][1]['teacher']);
var pointsTeacherLIM2017_1_S3=(data['LIM']['2017-1']['ratings'][2]['teacher']);
var pointsTeacherLIM2017_1_S4=(data['LIM']['2017-1']['ratings'][3]['teacher']);
var pointsTeacherLIM2017_1=pointsTeacherLIM2017_1_S1+
                           pointsTeacherLIM2017_1_S2+
                           pointsTeacherLIM2017_1_S3+
                           pointsTeacherLIM2017_1_S4;
var averagePointsTeacherLIM2017_1=pointsTeacherLIM2017_1/4;
console.log('Puntos por Teacher LIM2017_1 s1='+pointsTeacherLIM2017_1_S1);
console.log('Puntos por Teacher LIM2017_1 s2='+pointsTeacherLIM2017_1_S2);
console.log('Puntos por Teacher LIM2017_1 s3='+pointsTeacherLIM2017_1_S3);
console.log('Puntos por Teacher LIM2017_1 s4='+pointsTeacherLIM2017_1_S4);
console.log('Puntos por Teacher PROMEDIO LIM2017_1='+averagePointsTeacherLIM2017_1);


//*****LIM2017_2
var pointsTeacherLIM2017_2_S1=(data['LIM']['2017-2']['ratings'][0]['teacher']);
var pointsTeacherLIM2017_2_S2=(data['LIM']['2017-2']['ratings'][1]['teacher']);
var pointsTeacherLIM2017_2=pointsTeacherLIM2017_2_S1+
                           pointsTeacherLIM2017_2_S2;
var averagePointsTeacherLIM2017_2=pointsTeacherLIM2017_2/2;
console.log('Puntos por Teacher LIM2017_2 s1='+pointsTeacherLIM2017_2_S1);
console.log('Puntos por Teacher LIM2017_2 s2='+pointsTeacherLIM2017_2_S2);
console.log('Puntos por Teacher TOTAL LIM2017_2='+averagePointsTeacherLIM2017_2);


//*****SCL2016_2
var pointsTeacherSCL2016_2_S1=(data['SCL']['2016-2']['ratings'][0]['teacher']);
var pointsTeacherSCL2016_2_S2=(data['SCL']['2016-2']['ratings'][1]['teacher']);
var pointsTeacherSCL2016_2_S3=(data['SCL']['2016-2']['ratings'][2]['teacher']);
var pointsTeacherSCL2016_2_S4=(data['SCL']['2016-2']['ratings'][3]['teacher']);
var pointsTeacherSCL2016_2=pointsTeacherSCL2016_2_S1+
                           pointsTeacherSCL2016_2_S2+
                           pointsTeacherSCL2016_2_S3+
                           pointsTeacherSCL2016_2_S4;
var averagePointsTeacherSCL2016_2=pointsTeacherSCL2016_2/4;
console.log('Puntos por Teacher SCL2016_2 s1='+pointsTeacherSCL2016_2_S1);
console.log('Puntos por Teacher SCL2016_2 s2='+pointsTeacherSCL2016_2_S2);
console.log('Puntos por Teacher SCL2016_2 s3='+pointsTeacherSCL2016_2_S3);
console.log('Puntos por Teacher SCL2016_2 s4='+pointsTeacherSCL2016_2_S4);
console.log('Puntos por Teacher TOTAL SCL2016_2='+averagePointsTeacherSCL2016_2);


//*****SCL2017_1
var pointsTeacherSCL2017_1_S1=(data['SCL']['2017-1']['ratings'][0]['teacher']);
var pointsTeacherSCL2017_1_S2=(data['SCL']['2017-1']['ratings'][1]['teacher']);
var pointsTeacherSCL2017_1_S3=(data['SCL']['2017-1']['ratings'][2]['teacher']);
var pointsTeacherSCL2017_1=pointsTeacherSCL2017_1_S1+
                           pointsTeacherSCL2017_1_S2+
                           pointsTeacherSCL2017_1_S3;
var averagePointsTeacherSCL2017_1=pointsTeacherSCL2017_1/3;
console.log('Puntos por Teacher SCL2017_1 s1='+pointsTeacherSCL2017_1_S1);
console.log('Puntos por Teacher SCL2017_1 s2='+pointsTeacherSCL2017_1_S2);
console.log('Puntos por Teacher SCL2017_1 s3='+pointsTeacherSCL2017_1_S3);
console.log('Puntos por Teacher TOTAL SCL2017_1='+averagePointsTeacherSCL2017_1);


//*****SCL2017_2
var pointsTeacherSCL2017_2_S1=(data['SCL']['2017-2']['ratings'][0]['teacher']);
var pointsTeacherSCL2017_2_S2=(data['SCL']['2017-2']['ratings'][1]['teacher']);
var pointsTeacherSCL2017_2=pointsTeacherSCL2017_2_S1+
                           pointsTeacherSCL2017_2_S2;
var averagePointsTeacherSCL2017_2=pointsTeacherSCL2017_2/2;
console.log('Puntos por Teacher SCL2017_2 s1='+pointsTeacherSCL2017_2_S1);
console.log('Puntos por Teacher SCL2017_2 s2='+pointsTeacherSCL2017_2_S2);
console.log('Puntos por Teacher TOTAL SCL2017_1='+averagePointsTeacherSCL2017_2);
//Cálculo de porcentajes totales


var averageTeacherPointsTotal=((averagePointsTeacherAQP2016_2+averagePointsTeacherAQP2017_1+
                               averagePointsTeacherCDMX2017_1+averagePointsTeacherCDMX2017_2+
                               averagePointsTeacherLIM2016_2+averagePointsTeacherLIM2017_1+averagePointsTeacherLIM2017_2+
                               averagePointsTeacherSCL2016_2+averagePointsTeacherSCL2017_1+averagePointsTeacherSCL2017_2)/10);
console.log('Promedio de Teachers TOTAL='+ averageTeacherPointsTotal);


//**********La puntuación promedio de l@s jedi masters..**********


//*****AQP2016_2
var pointsJediAQP2016_2_S1=(data['AQP']['2016-2']['ratings'][0]['jedi']);
var pointsJediAQP2016_2_S2=(data['AQP']['2016-2']['ratings'][1]['jedi']);
var pointsJediAQP2016_2_S3=(data['AQP']['2016-2']['ratings'][2]['jedi']);
var pointsJediAQP2016_2_S4=(data['AQP']['2016-2']['ratings'][3]['jedi']);
var pointsJediAQP2016_2=pointsJediAQP2016_2_S1+
                           pointsJediAQP2016_2_S2+
                           pointsJediAQP2016_2_S3+
                           pointsJediAQP2016_2_S4;
var averagePointsJediAQP2016_2=pointsTeacherAQP2016_2/4;
console.log('Puntos por Jedi AQP2016_2 s1='+pointsJediAQP2016_2_S1);
console.log('Puntos por Jedi AQP2016_2 s2='+pointsJediAQP2016_2_S2);
console.log('Puntos por Jedi AQP2016_2 s3='+pointsJediAQP2016_2_S3);
console.log('Puntos por Jedi AQP2016_2 s4='+pointsJediAQP2016_2_S4);
console.log('Puntos PROMEDIO por Jedi AQP2016_2 TOTALES='+averagePointsJediAQP2016_2);
//*****AQP2017_1
var pointsJediAQP2017_1_S1=(data['AQP']['2017-1']['ratings'][0]['jedi']);
var pointsJediAQP2017_1_S2=(data['AQP']['2017-1']['ratings'][1]['jedi']);
var pointsJediAQP2017_1_S3=(data['AQP']['2017-1']['ratings'][2]['jedi']);
var pointsJediAQP2017_1=pointsJediAQP2017_1_S1+
                           pointsJediAQP2017_1_S2+
                           pointsJediAQP2017_1_S3;
var averagePointsJediAQP2017_1=pointsJediAQP2017_1/3;
console.log('Puntos por Jedi AQP2017_1 s1='+pointsJediAQP2017_1_S1);
console.log('Puntos por Jedi AQP2017_1 s2='+pointsJediAQP2017_1_S2);
console.log('Puntos por Jedi AQP2017_1 s3='+pointsJediAQP2017_1_S3);
console.log('Puntos PROMEDIO por Jedi AQP2017_1='+averagePointsJediAQP2017_1);


//*****CDMX2017_1
var pointsJediCDMX2017_1_S1=(data['CDMX']['2017-1']['ratings'][0]['jedi']);
var pointsJediCDMX2017_1_S2=(data['CDMX']['2017-1']['ratings'][1]['jedi']);
var pointsJediCDMX2017_1_S3=(data['CDMX']['2017-1']['ratings'][2]['jedi']);
var pointsJediCDMX2017_1=pointsJediCDMX2017_1_S1+
                            pointsJediCDMX2017_1_S2+
                            pointsJediCDMX2017_1_S3;
var averagePointsJediCDMX2017_1=pointsJediCDMX2017_1/3;
console.log('Puntos por Jedi CDMX2017_1 s1='+pointsJediCDMX2017_1_S1);
console.log('Puntos por Jedi CDMX2017_1 s2='+pointsJediCDMX2017_1_S2);
console.log('Puntos por Jedi CDMX2017_1 s3='+pointsJediCDMX2017_1_S3);
console.log('Puntos por Jedi PROMEDIO CDMX2017_1='+averagePointsJediCDMX2017_1);


//*****CDMX2017_2
var pointsJediCDMX2017_2_S1=(data['CDMX']['2017-2']['ratings'][0]['jedi']);
var pointsJediCDMX2017_2_S2=(data['CDMX']['2017-2']['ratings'][1]['jedi']);
var pointsJediCDMX2017_2=pointsJediCDMX2017_2_S1+
                            pointsJediCDMX2017_2_S2;
var averagePointsJediCDMX2017_2=pointsJediCDMX2017_2/2;
console.log('Puntos por Jedi CDMX2017_2 s1='+pointsJediCDMX2017_2_S1);
console.log('Puntos por Jedi CDMX2017_2 s2='+pointsJediCDMX2017_2_S2);
console.log('Puntos por Jedi PROMEDIO CDMX2017_2='+averagePointsJediCDMX2017_2);


//*****LIM2016_2
var pointsJediLIM2016_2_S1=(data['LIM']['2016-2']['ratings'][0]['jedi']);
var pointsJediLIM2016_2_S2=(data['LIM']['2016-2']['ratings'][1]['jedi']);
var pointsJediLIM2016_2=pointsJediLIM2016_2_S1+
                           pointsJediLIM2016_2_S2;
var averagePointsJediLIM2016_2=pointsJediLIM2016_2/2;
console.log('Puntos porJedi LIM2016_2 s1='+pointsJediLIM2016_2_S1);
console.log('Puntos porJedi LIM2016_2 s2='+pointsJediLIM2016_2_S2);
console.log('Puntos porJedi PROMEDIO LIM 2016_2='+averagePointsJediLIM2016_2);


//*****LIM2017_1
var pointsJediLIM2017_1_S1=(data['LIM']['2017-1']['ratings'][0]['jedi']);
var pointsJediLIM2017_1_S2=(data['LIM']['2017-1']['ratings'][1]['jedi']);
var pointsJediLIM2017_1_S3=(data['LIM']['2017-1']['ratings'][2]['jedi']);
var pointsJediLIM2017_1_S4=(data['LIM']['2017-1']['ratings'][3]['jedi']);
var pointsJediLIM2017_1=pointsJediLIM2017_1_S1+
                           pointsJediLIM2017_1_S2+
                           pointsJediLIM2017_1_S3+
                           pointsJediLIM2017_1_S4;
var averagePointsJediLIM2017_1=pointsJediLIM2017_1/4;
console.log('Puntos porJedi LIM2017_1 s1='+pointsJediLIM2017_1_S1);
console.log('Puntos porJedi LIM2017_1 s2='+pointsJediLIM2017_1_S2);
console.log('Puntos porJedi LIM2017_1 s3='+pointsJediLIM2017_1_S3);
console.log('Puntos porJedi LIM2017_1 s4='+pointsJediLIM2017_1_S4);
console.log('Puntos porJedi PROMEDIO LIM2017_1='+averagePointsJediLIM2017_1);


//*****LIM2017_2
var pointsJediLIM2017_2_S1=(data['LIM']['2017-2']['ratings'][0]['jedi']);
var pointsJediLIM2017_2_S2=(data['LIM']['2017-2']['ratings'][1]['jedi']);
var pointsJediLIM2017_2=pointsJediLIM2017_2_S1+
                     pointsJediLIM2017_2_S2;
var averagePointsJediLIM2017_2=pointsJediLIM2017_2/2;
console.log('Puntos porJedi LIM2017_2 s1='+pointsJediLIM2017_2_S1);
console.log('Puntos porJedi LIM2017_2 s2='+pointsJediLIM2017_2_S2);
console.log('Puntos porJedi TOTAL LIM2017_2='+averagePointsJediLIM2017_2);


//*****SCL2016_2
var pointsJediSCL2016_2_S1=(data['SCL']['2016-2']['ratings'][0]['jedi']);
var pointsJediSCL2016_2_S2=(data['SCL']['2016-2']['ratings'][1]['jedi']);
var pointsJediSCL2016_2_S3=(data['SCL']['2016-2']['ratings'][2]['jedi']);
var pointsJediSCL2016_2_S4=(data['SCL']['2016-2']['ratings'][3]['jedi']);
var pointsJediSCL2016_2=pointsJediSCL2016_2_S1+
                           pointsJediSCL2016_2_S2+
                           pointsJediSCL2016_2_S3+
                           pointsJediSCL2016_2_S4;
var averagePointsJediSCL2016_2=pointsJediSCL2016_2/4;
console.log('Puntos porJedi SCL2016_2 s1='+pointsJediSCL2016_2_S1);
console.log('Puntos porJedi SCL2016_2 s2='+pointsJediSCL2016_2_S2);
console.log('Puntos porJedi SCL2016_2 s3='+pointsJediSCL2016_2_S3);
console.log('Puntos porJedi SCL2016_2 s4='+pointsJediSCL2016_2_S4);
console.log('Puntos porJedi TOTAL SCL2016_2='+averagePointsJediSCL2016_2);


//*****SCL2017_1
var pointsJediSCL2017_1_S1=(data['SCL']['2017-1']['ratings'][0]['jedi']);
var pointsJediSCL2017_1_S2=(data['SCL']['2017-1']['ratings'][1]['jedi']);
var pointsJediSCL2017_1_S3=(data['SCL']['2017-1']['ratings'][2]['jedi']);
var pointsJediSCL2017_1=pointsJediSCL2017_1_S1+
                           pointsJediSCL2017_1_S2+
                           pointsJediSCL2017_1_S3;
var averagePointsJediSCL2017_1=pointsJediSCL2017_1/3;
console.log('Puntos porJedi SCL2017_1 s1='+pointsJediSCL2017_1_S1);
console.log('Puntos porJedi SCL2017_1 s2='+pointsJediSCL2017_1_S2);
console.log('Puntos porJedi SCL2017_1 s3='+pointsJediSCL2017_1_S3);
console.log('Puntos porJedi TOTAL SCL2017_1='+averagePointsJediSCL2017_1);


//*****SCL2017_2
var pointsJediSCL2017_2_S1=(data['SCL']['2017-2']['ratings'][0]['jedi']);
var pointsJediSCL2017_2_S2=(data['SCL']['2017-2']['ratings'][1]['jedi']);
var pointsJediSCL2017_2=pointsJediSCL2017_2_S1+
                           pointsJediSCL2017_2_S2;
var averagePointsJediSCL2017_2=pointsJediSCL2017_2/2;
console.log('Puntos por Teacher SCL2017_2 s1='+pointsTeacherSCL2017_2_S1);
console.log('Puntos porJedi SCL2017_2 s2='+pointsJediSCL2017_2_S2);
console.log('Puntos porJedi TOTAL SCL2017_1='+averagePointsJediSCL2017_2);
//Cálculo de porcentajes totales


var averageJediPointsTotal=((averagePointsJediAQP2016_2+averagePointsJediAQP2017_1+
                               averagePointsJediCDMX2017_1+averagePointsJediCDMX2017_2+
                               averagePointsJediLIM2016_2+averagePointsJediLIM2017_1+averagePointsTeacherLIM2017_2+
                               averagePointsTeacherSCL2016_2+averagePointsJediSCL2017_1+averagePointsTeacherSCL2017_2)/10);
console.log('Promedio de Jedi TOTAL='+ averageJediPointsTotal);


//cálculo de los promedios que superan TECH totales
var averageContTechS1=((contSupTechAQP2016_2_S1+ contSupTechAQP2017_1_S1+ contSupTechCDMX2017_1_S1+ contSupTechCDMX2017_2_S1+ contSupTechLIM2016_2_S1+ contSupTechLIM2017_1_S1+ contSupTechLIM2017_2_S1+ contSupTechSCL2016_2_S1+ contSupTechSCL2017_1_S1+ contSupTechSCL2017_2_S1)/10);
var averageContTechS2=((contSupTechAQP2016_2_S2+ contSupTechAQP2017_1_S2+ contSupTechCDMX2017_1_S2+ contSupTechCDMX2017_2_S2+ contSupTechLIM2016_2_S2+ contSupTechLIM2017_1_S2+ contSupTechLIM2017_2_S2+ contSupTechSCL2016_2_S2+ contSupTechSCL2017_1_S2+ contSupTechSCL2017_2_S2)/10);
var averageContTechS3=((contSupTechAQP2016_2_S3+ contSupTechAQP2017_1_S3+ contSupTechCDMX2017_1_S3+ contSupTechSCL2016_2_S3)/4);
var averageContTechS4=((contSupTechAQP2016_2_S4+ contSupTechSCL2016_2_S4)/2);


//cálculo de los promedios que superan HSE totales
var averageContHseS1=((contSupHseAQP2016_2_S1+ contSupHseAQP2017_1_S1+ contSupHseCDMX2017_1_S1+ contSupHseCDMX2017_2_S1+ contSupHseLIM2016_2_S1+ contSupHseLIM2017_1_S1+ contSupHseLIM2017_2_S1+ contSupHseSCL2016_2_S1+ contSupHseSCL2017_1_S1+ contSupHseSCL2017_2_S1)/10);
var averageContHseS2=((contSupHseAQP2016_2_S2+ contSupHseAQP2017_1_S2+ contSupHseCDMX2017_1_S2+ contSupHseCDMX2017_2_S2+ contSupHseLIM2016_2_S2+ contSupHseLIM2017_1_S2+ contSupHseLIM2017_2_S2+ contSupHseSCL2016_2_S2+ contSupHseSCL2017_1_S2+ contSupHseSCL2017_2_S2)/10);
var averageContHseS3=((contSupHseAQP2016_2_S3+ contSupHseAQP2017_1_S3+ contSupHseCDMX2017_1_S3+ contSupHseSCL2016_2_S3)/4);
var averageContHseS4=((contSupHseAQP2016_2_S4+ contSupHseSCL2016_2_S4)/2);


//cálculo de los promedios por Teacher por sprint
var averageTeacherTotalesS1=((pointsTeacherAQP2016_2_S1+ pointsTeacherAQP2017_1_S1+ pointsTeacherCDMX2017_1_S1+ pointsTeacherCDMX2017_2_S1+ pointsTeacherLIM2016_2_S1+ pointsTeacherLIM2017_1_S1+ pointsTeacherLIM2017_2_S1+ pointsTeacherSCL2016_2_S1+ pointsTeacherSCL2017_1_S1+ pointsTeacherSCL2017_2_S1)/10);
var averageTeacherTotalesS2=((pointsTeacherAQP2016_2_S2+ pointsTeacherAQP2017_1_S2+ pointsTeacherCDMX2017_1_S2+ pointsTeacherCDMX2017_2_S2+ pointsTeacherLIM2016_2_S2+ pointsTeacherLIM2017_1_S2+ pointsTeacherLIM2017_2_S2+ pointsTeacherSCL2016_2_S2+ pointsTeacherSCL2017_1_S2+ pointsTeacherSCL2017_2_S2)/10);
var averageTeacherTotalesS3=((pointsTeacherAQP2016_2_S3+ pointsTeacherAQP2017_1_S3+ pointsTeacherCDMX2017_1_S3+ pointsTeacherSCL2016_2_S3)/4);
var averageTeacherTotalesS4=((pointsTeacherAQP2016_2_S4+ pointsTeacherSCL2016_2_S4)/2);


//cálculo de los promedios por Teacher por sprint
var averageJediTotalesS1=((pointsJediAQP2016_2_S1+ pointsJediAQP2017_1_S1+ pointsJediCDMX2017_1_S1+ pointsJediCDMX2017_2_S1+ pointsJediLIM2016_2_S1+ pointsJediLIM2017_1_S1+ pointsJediLIM2017_2_S1+ pointsJediSCL2016_2_S1+ pointsJediSCL2017_1_S1+ pointsJediSCL2017_2_S1)/10);
var averageJediTotalesS2=((pointsJediAQP2016_2_S2+ pointsJediAQP2017_1_S2+ pointsJediCDMX2017_1_S2+ pointsJediCDMX2017_2_S2+ pointsJediLIM2016_2_S2+ pointsJediLIM2017_1_S2+ pointsJediLIM2017_2_S2+ pointsJediSCL2016_2_S2+ pointsJediSCL2017_1_S2+ pointsJediSCL2017_2_S2)/10);
var averageJediTotalesS3=((pointsJediAQP2016_2_S3+ pointsJediAQP2017_1_S3+ pointsJediCDMX2017_1_S3+ pointsJediSCL2016_2_S3)/4);
var averageJediTotalesS4=((pointsJediAQP2016_2_S4+ pointsJediSCL2016_2_S4)/2);





var algo=0;
for ( i=0; i<alumnasAQP20162 ;i++){
  if(data['AQP']['2016-2']['students'][i]['sprints'].length!== 0){
    if ((data['AQP']['2016-2']['students'][i]['sprints'][0]['score']['tech'])>= 1260&&
        (data['AQP']['2016-2']['students'][i]['sprints'][0]['score']['hse'])>= 840);


     {
      algo =algo+1;
     }
   }
}
console.log(algo);
