import { CircleUserRound, Hash, ShoppingBag, Star, Target, WalletCards } from "lucide-react";
import { Box, Card, CardContent, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import type { CustomerExplorerData } from "../../types/customer";

interface CustomerExplorerProps { customer: CustomerExplorerData; }

function CustomerExplorer({ customer }: CustomerExplorerProps) {
 const metrics=[
  ["Total Orders",customer.totalOrders.toLocaleString(),<ShoppingBag size={18}/>],
  ["Total Spent",customer.totalSpent.toFixed(2),<WalletCards size={18}/>],
  ["Average Order Value",customer.averageOrderValue.toFixed(2),<Hash size={18}/>],
  ["Average Review Score",customer.averageReviewScore.toFixed(2),<Star size={18}/>],
 ];
 return <Card elevation={0} sx={{
   borderRadius:3.5,border:1,borderColor:"rgba(96,165,250,.25)",
   background:"linear-gradient(145deg,rgba(30,41,59,.72),rgba(15,23,42,.48) 58%,rgba(37,99,235,.07))",
   backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",
   boxShadow:"inset 0 1px 0 rgba(255,255,255,.06),0 22px 52px rgba(0,0,0,.2)"
 }}>
 <CardContent sx={{p:{xs:2,sm:2.5,md:3}}}><Stack spacing={2.5}>
  <Stack direction={{xs:"column",sm:"row"}} justifyContent="space-between" alignItems={{xs:"flex-start",sm:"center"}} gap={1.5}>
   <Stack direction="row" spacing={1.3} alignItems="center">
    <Box sx={{width:48,height:48,display:"grid",placeItems:"center",borderRadius:2.6,border:1,borderColor:"rgba(96,165,250,.2)",color:"primary.main",background:"linear-gradient(145deg,rgba(59,130,246,.15),rgba(99,102,241,.035))"}}><CircleUserRound size={22}/></Box>
    <Box><Typography variant="overline" color="primary" sx={{fontWeight:800}}>PREDICTION PROFILE</Typography>
    <Typography variant="h6" sx={{fontFamily:'"Space Grotesk",sans-serif',fontWeight:850}}>Customer Explorer</Typography></Box>
   </Stack>
   <Chip icon={<Target size={14}/>} label={`Cluster ${customer.clusterId}`} color="primary" variant="outlined" size="small"/>
  </Stack>
  <Box sx={{p:1.6,borderRadius:2.6,border:1,borderColor:"rgba(148,163,184,.12)",background:"rgba(15,23,42,.3)"}}>
   <Typography variant="caption" color="text.secondary" sx={{fontFamily:'"JetBrains Mono",monospace',fontWeight:800}}>CUSTOMER ID</Typography>
   <Typography sx={{mt:.4,fontWeight:750,wordBreak:"break-word"}}>{customer.customerId}</Typography>
  </Box>
  <Divider sx={{borderColor:"rgba(148,163,184,.11)"}}/>
  <Grid container spacing={1.5}>{metrics.map(([label,value,icon])=><Grid key={label as string} size={{xs:12,sm:6}}>
   <Box sx={{height:"100%",p:1.6,borderRadius:2.6,border:1,borderColor:"rgba(148,163,184,.11)",background:"rgba(15,23,42,.24)",transition:"transform 180ms ease,border-color 180ms ease","&:hover":{transform:"translateY(-2px)",borderColor:"rgba(96,165,250,.3)"},"@media (prefers-reduced-motion: reduce)":{transition:"none","&:hover":{transform:"none"}}}}>
    <Stack direction="row" spacing={1} alignItems="center"><Box sx={{color:"primary.main",display:"flex"}}>{icon}</Box><Typography variant="caption" color="text.secondary" sx={{fontWeight:750}}>{label}</Typography></Stack>
    <Typography variant="h6" sx={{mt:1,fontFamily:'"Space Grotesk",sans-serif',fontWeight:820}}>{value}</Typography>
   </Box>
  </Grid>)}</Grid>
 </Stack></CardContent></Card>;
}
export default CustomerExplorer;
