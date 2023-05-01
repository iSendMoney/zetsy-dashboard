import { Card, Title, Text, Grid } from "@tremor/react";
import { Helmet } from "react-helmet";
import "./styles/analytics.style.css";
import Sales from "../../components/Analytics/Sales";

export default function AnalyticsNew({theme}) {
  return (
    <main className={`analyticsTab__container ${theme}`}>
      <Helmet>
        <title>
          Analytics | Zetsy - Your all in one store for online retails.
        </title>
      </Helmet>
      <Title className="pageTitle">Analytics</Title>
      <Text className="text-base">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <Sales className="analyticsItems" theme={theme}/>
      {/* <Grid numColsMd={2} className="mt-6 gap-6">
        <Card>
          <div className="h-44" />
        </Card>
        <Card>
          <div className="h-44" />
        </Card>
        <Card>
          <div className="h-44" />
        </Card>
        <Card>
          <div className="h-44" />
        </Card>
        <Card>
          <div className="h-44" />
        </Card>
        <Card>
          <div className="h-44" />
        </Card>
      </Grid> */}
    </main>
  );
}
