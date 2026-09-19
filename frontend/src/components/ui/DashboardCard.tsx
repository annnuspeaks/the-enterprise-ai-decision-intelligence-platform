import { BarChart3, ArrowUpRight } from "lucide-react";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

interface DashboardCardProps {
  title: string;
  value: string | number;
  description: string;
}

function DashboardCard({ title, value, description }: DashboardCardProps) {
  return (
    <Card elevation={0} sx={{
      height: "100%", position: "relative", overflow: "hidden",
      borderRadius: 3.5, border: 1, borderColor: "rgba(148,163,184,0.15)",
      background: "linear-gradient(145deg, rgba(30,41,59,.72), rgba(15,23,42,.48) 58%, rgba(37,99,235,.07))",
      backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,.055), 0 18px 44px rgba(0,0,0,.16)",
      transition: "transform 220ms ease,border-color 220ms ease,box-shadow 220ms ease",
      "&::after": { content:'""', position:"absolute", width:120, height:120, right:-55, top:-60, borderRadius:"50%",
        background:"radial-gradient(circle,rgba(59,130,246,.16),transparent 68%)", pointerEvents:"none" },
      "&:hover": { transform:"translateY(-5px)", borderColor:"rgba(96,165,250,.38)",
        boxShadow:"inset 0 1px 0 rgba(255,255,255,.08),0 24px 50px rgba(0,0,0,.23),0 0 28px rgba(59,130,246,.08)" },
      "@media (prefers-reduced-motion: reduce)": { transition:"none","&:hover":{transform:"none"} }
    }}>
      <CardContent sx={{p:{xs:2,sm:2.4}}}>
        <Stack spacing={1.7}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Box sx={{width:48,height:48,display:"grid",placeItems:"center",borderRadius:2.7,
              border:1,borderColor:"rgba(96,165,250,.2)",color:"primary.main",
              background:"linear-gradient(145deg,rgba(59,130,246,.15),rgba(99,102,241,.035))"}}>
              <BarChart3 size={21}/>
            </Box>
            <ArrowUpRight size={17} style={{opacity:.55}}/>
          </Stack>
          <Typography variant="overline" color="text.secondary" sx={{fontFamily:'"JetBrains Mono",monospace',fontWeight:800,letterSpacing:".055em"}}>
            {title}
          </Typography>
          <Typography variant="h4" sx={{fontFamily:'"Space Grotesk",sans-serif',fontWeight:850,letterSpacing:"-.045em",lineHeight:1}}>
            {value}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{lineHeight:1.5}}>
            {description}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
export default DashboardCard;
