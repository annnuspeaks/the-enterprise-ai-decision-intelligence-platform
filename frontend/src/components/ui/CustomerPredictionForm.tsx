import { useState } from "react";
import { Alert, Box, Button, Card, CardContent, CircularProgress, Grid, Stack, TextField, Typography } from "@mui/material";
import { CheckCircle2, Play, Sparkles } from "lucide-react";
import { predictCustomerSegmentation } from "../../services/customerSegmentationService";

export interface CustomerPredictionResult {
 totalOrders:number; totalSpent:number; averageOrderValue:number; averageReviewScore:number; clusterId:number; segmentName:string;
}
interface CustomerPredictionFormProps { onPrediction:(result:CustomerPredictionResult)=>void; }

function CustomerPredictionForm({onPrediction}:CustomerPredictionFormProps){
 const [totalOrders,setTotalOrders]=useState("12"),[totalSpent,setTotalSpent]=useState("1850.75"),
 [averageOrderValue,setAverageOrderValue]=useState("154.23"),[averageReviewScore,setAverageReviewScore]=useState("4.6");
 const [result,setResult]=useState<CustomerPredictionResult|null>(null),[isLoading,setIsLoading]=useState(false),[error,setError]=useState<string|null>(null);

 const handlePredict=async()=>{
  setError(null);setResult(null);
  const orders=Number(totalOrders),spent=Number(totalSpent),orderValue=Number(averageOrderValue),reviewScore=Number(averageReviewScore);
  if(!Number.isFinite(orders)||!Number.isFinite(spent)||!Number.isFinite(orderValue)||!Number.isFinite(reviewScore)){setError("Please enter valid numeric values.");return;}
  if(orders<0||spent<0||orderValue<0){setError("Orders, spending, and order value cannot be negative.");return;}
  if(reviewScore<0||reviewScore>5){setError("Average review score must be between 0 and 5.");return;}
  try{
   setIsLoading(true);
   const prediction=await predictCustomerSegmentation({total_orders:orders,total_spent:spent,average_order_value:orderValue,average_review_score:reviewScore});
   const predictionResult={totalOrders:orders,totalSpent:spent,averageOrderValue:orderValue,averageReviewScore:reviewScore,clusterId:prediction.cluster_id,segmentName:prediction.segment_name};
   setResult(predictionResult);onPrediction(predictionResult);
  }catch{setError("Unable to generate prediction. Please make sure the backend service is running.");}
  finally{setIsLoading(false);}
 };
 const fieldSx={
  "& .MuiOutlinedInput-root":{borderRadius:2.5,background:"rgba(15,23,42,.28)",transition:"border-color 180ms ease,box-shadow 180ms ease","& fieldset":{borderColor:"rgba(148,163,184,.16)"},"&:hover fieldset":{borderColor:"rgba(96,165,250,.34)"},"&.Mui-focused":{boxShadow:"0 0 0 3px rgba(59,130,246,.09)"},"&.Mui-focused fieldset":{borderColor:"rgba(96,165,250,.7)"}}
 };
 return <Card elevation={0} sx={{borderRadius:3,border:1,borderColor:"rgba(148,163,184,.12)",background:"rgba(15,23,42,.2)",boxShadow:"inset 0 1px 0 rgba(255,255,255,.035)"}}>
  <CardContent sx={{p:{xs:2,sm:2.5,md:3}}}><Stack spacing={2.5}>
   <Stack direction={{xs:"column",sm:"row"}} justifyContent="space-between" alignItems={{xs:"flex-start",sm:"center"}} gap={1}>
    <Box><Typography variant="overline" color="primary" sx={{fontWeight:800}}>INPUT FEATURES</Typography>
    <Typography variant="h6" sx={{fontFamily:'"Space Grotesk",sans-serif',fontWeight:850}}>Customer Prediction</Typography>
    <Typography variant="body2" color="text.secondary" sx={{mt:.4}}>Enter customer-level features to generate a real-time segmentation prediction.</Typography></Box>
    <Stack direction="row" spacing={.7} alignItems="center"><Sparkles size={15}/><Typography variant="caption" color="text.secondary">MODEL 01</Typography></Stack>
   </Stack>
   <Grid container spacing={1.7}>
    <Grid size={{xs:12,sm:6}}><TextField fullWidth label="Total Orders" type="number" value={totalOrders} onChange={e=>setTotalOrders(e.target.value)} slotProps={{htmlInput:{min:0}}} sx={fieldSx}/></Grid>
    <Grid size={{xs:12,sm:6}}><TextField fullWidth label="Total Spent" type="number" value={totalSpent} onChange={e=>setTotalSpent(e.target.value)} slotProps={{htmlInput:{min:0,step:"0.01"}}} sx={fieldSx}/></Grid>
    <Grid size={{xs:12,sm:6}}><TextField fullWidth label="Average Order Value" type="number" value={averageOrderValue} onChange={e=>setAverageOrderValue(e.target.value)} slotProps={{htmlInput:{min:0,step:"0.01"}}} sx={fieldSx}/></Grid>
    <Grid size={{xs:12,sm:6}}><TextField fullWidth label="Average Review Score" type="number" value={averageReviewScore} onChange={e=>setAverageReviewScore(e.target.value)} slotProps={{htmlInput:{min:0,max:5,step:"0.1"}}} sx={fieldSx}/></Grid>
   </Grid>
   {error&&<Alert severity="error" sx={{borderRadius:2.5}}>{error}</Alert>}
   <Button variant="contained" onClick={handlePredict} disabled={isLoading} startIcon={isLoading?<CircularProgress size={17} color="inherit"/>:<Play size={17}/>} sx={{
    alignSelf:{xs:"stretch",sm:"flex-start"},minHeight:49,px:3,borderRadius:2.5,color:"#fff",fontFamily:'"Space Grotesk",sans-serif',fontWeight:800,textTransform:"none",
    background:"linear-gradient(100deg,#2563eb 0%,#4f46e5 52%,#7c3aed 100%)",boxShadow:"0 10px 28px rgba(37,99,235,.24),inset 0 1px 0 rgba(255,255,255,.14)",
    transition:"transform 180ms ease,box-shadow 180ms ease","&:hover":{background:"linear-gradient(100deg,#3b82f6,#6366f1,#8b5cf6)",transform:"translateY(-2px)",boxShadow:"0 14px 34px rgba(37,99,235,.32)"},"@media (prefers-reduced-motion: reduce)":{transition:"none","&:hover":{transform:"none"}}
   }}>{isLoading?"Predicting...":"Predict Customer Segment"}</Button>
   {result&&<Alert severity="success" icon={<CheckCircle2 size={20}/>} sx={{borderRadius:2.5}}>Prediction: <strong>{result.segmentName}</strong></Alert>}
  </Stack></CardContent>
 </Card>;
}
export default CustomerPredictionForm;
