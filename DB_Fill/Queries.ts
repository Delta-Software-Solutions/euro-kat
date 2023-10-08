import PocketBase from "pocketbase";
import {
  Series,
  SubSeries,
  Figure,
  SubSeriesVariation,
  FigureVariation,
  Packaging
} from "../sveltekat/src/lib/PocketBase.js";

const pb = new PocketBase("https://ek.krenn.tech/");
pb.autoCancellation(false);

async function FiguresOrderedByMPG(): Promise<Figure[]> {
  console.log(
    await pb.admins.authWithPassword("admin@admin.admin", "Kennwort1!")
  );
  const figures = await pb.collection('Figure').getFullList({
    sort: '+mpgNr'
  });

  return figures;

}

async function GetAllSeries(): Promise<Series[]> {
  console.log(
    await pb.admins.authWithPassword("admin@admin.admin", "Kennwort1!")
  );

  const series = await pb.collection('Series').getFullList();

  return series;
}


async function GetAllSubSeries(): Promise<SubSeries[]> {
  console.log(
    await pb.admins.authWithPassword("admin@admin.admin", "Kennwort1!")
  );

  const subseries = await pb.collection('SubSeries').getFullList();

  return subseries;

}

async function GetAllSubSeriesVariation(): Promise<SubSeriesVariation[]> {
  console.log(
    await pb.admins.authWithPassword("admin@admin.admin", "Kennwort1!")
  );

  const subseriesvariation = await pb.collection('SubSeriesVariation').getFullList();

  return subseriesvariation;

}

async function GetAllFigureVariation(): Promise<FigureVariation[]> {
  console.log(
    await pb.admins.authWithPassword("admin@admin.admin", "Kennwort1!")
  );

  const figurevariation = await pb.collection('FigureVariation').getFullList();

  return figurevariation;

}

async function GetFigureByMPG(mpg:string): Promise<Figure> {
  console.log(
    await pb.admins.authWithPassword("admin@admin.admin", "Kennwort1!")
  );

  const figure = await pb.collection('Figure').getFullList({
    filter: `mpgNr = "${mpg}"`
  });

  return figure;
}

async function GetAllPackaging(): Promise<Packaging[]> {
  console.log(
    await pb.admins.authWithPassword("admin@admin.admin", "Kennwort1!")
  );

  const packaging = await pb.collection('Packaging').getFullList();

  return packaging;

}


//Print outputs of all Queries

/*FiguresOrderedByMPG().then((figures) => {
  console.log(figures);
}).catch((error) => {
  console.error(error);
});*/

/*GetAllSeries().then((series) => {
  console.log(series);
}).catch((error) => {
  console.error(error);
});*/

/*GetAllSubSeries().then((subseries) => {
  console.log(subseries);
}).catch((error) => {
  console.error(error);
});*/

/*GetAllSubSeriesVariation().then((subseriesvariation) => {
  console.log(subseriesvariation);
}).catch((error) => {
  console.error(error);
});*/

/*GetAllFigureVariation().then((figurevariation) => {
  console.log(figurevariation);
}).catch((error) => {
  console.error(error);
});*/

/*GetFigureByMPG('SEF07').then((figure) => {
  console.log(figure);
}).catch((error) => {
  console.error(error);
});*/

/*GetAllPackaging().then((packaging) => {
  console.log(packaging);
}).catch((error) => {
  console.error(error);
});*/