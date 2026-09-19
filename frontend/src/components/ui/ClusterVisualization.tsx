import { Activity, Layers3 } from "lucide-react";
import { Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";

interface ClusterData { cluster:number; count:number; percentage:number; }

const clusterData: ClusterData[] = [
 {cluster:0,count:69743,percentage:72.58},{cluster:1,count:2973,percentage:3.09},
 {cluster:2,count:20488,percentage:21.32},{cluster:3,count:2848,percentage:2.96},
 {cluster:4,count:43,percentage:.04},{cluster:5,count:1,percentage:0}
];

function ClusterVisualization() {
 return <Card elevation={0} sx={{
   borderRadius:3.5,border:1,borderColor:"rgba(148,163,184,.15)",
   background:"linear-gradient(145deg,rgba(30,41,59,.68),rgba(15,23,42,.46) 58%,rgba(37,99,235,.055))",
   backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",
   boxShadow:"inset 0 1px 0 rgba(255,255,255,.055),0 18px 44px rgba(0,0,0,.16)",
   transition:"transform 220ms ease,border-color 220ms ease,box-shadow 220ms ease",
   "&:hover":{transform:"translateY(-4px)",borderColor:"rgba(96,165,250,.34)",
   boxShadow:"inset 0 1px 0 rgba(255,255,255,.07),0 22px 48px rgba(0,0,0,.21)"},
   "@media (prefers-reduced-motion: reduce)":{transition:"none","&:hover":{transform:"none"}}
 }}>
 <CardContent sx={{p:{xs:2,sm:2.5,md:3}}}>
  <Stack spacing={2.5}>
   <Stack direction={{xs:"column",sm:"row"}} justifyContent="space-between" alignItems={{xs:"flex-start",sm:"center"}} gap={1.5}>
    <Stack direction="row" spacing={1.3} alignItems="center">
     <Box sx={{width:46,height:46,display:"grid",placeItems:"center",borderRadius:2.5,border:1,
       borderColor:"rgba(96,165,250,.2)",color:"primary.main",
       background:"linear-gradient(145deg,rgba(59,130,246,.14),rgba(99,102,241,.035))"}}><Layers3 size={21}/></Box>
     <Box><Typography variant="overline" color="primary" sx={{fontWeight:800}}>MODEL DISTRIBUTION</Typography>
     <Typography variant="h6" sx={{fontFamily:'"Space Grotesk",sans-serif',fontWeight:850}}>Customer Cluster Distribution</Typography></Box>
    </Stack>
    <Chip icon={<Activity size={14}/>} label="6 clusters" size="small" variant="outlined"/>
   </Stack>
   <Typography variant="body2" color="text.secondary">Distribution of customers across the six validated segments.</Typography>
   <Stack spacing={1.9}>
    {clusterData.map((item,i)=><Box key={item.cluster}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{mb:.8,gap:1}}>
       <Typography variant="body2" sx={{fontWeight:800}}>Cluster {item.cluster}</Typography>
       <Typography variant="caption" color="text.secondary">{item.count.toLocaleString()} · {item.percentage.toFixed(2)}%</Typography>
      </Stack>
      <Box sx={{height:11,borderRadius:99,overflow:"hidden",background:"rgba(148,163,184,.08)",border:1,borderColor:"rgba(148,163,184,.08)"}}>
       <Box sx={{width:`${Math.max(item.percentage,.5)}%`,height:"100%",borderRadius:99,
         background:"linear-gradient(90deg,#60a5fa,#6366f1,#8b5cf6)",
         animation:`clusterGrow 700ms cubic-bezier(.22,1,.36,1) ${i*80}ms both`,
         "@keyframes clusterGrow":{from:{transform:"scaleX(0)",transformOrigin:"left",opacity:.2},to:{transform:"scaleX(1)",opacity:1}},
         "@media (prefers-reduced-motion: reduce)":{animation:"none"}}}/>
      </Box>
    </Box>)}
   </Stack>
  </Stack>
 </CardContent>
 </Card>;
}
export default ClusterVisualization;
