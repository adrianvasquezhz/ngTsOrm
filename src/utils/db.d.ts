/**
 * The modules name deben ser un string y al momento de importarlo no es necesario usar la ruta: "../../../**", solo el nombre(string).
 * Si pongo un export a uno, todos se exportan, si quiero solo uno, puedo usar el "export assignment": export = ...
 * Observacion del "export assignment": Es como hacer un export default por lo que si se usa la desestructuracion se estario sacando su
 * contenido en caso de ser un namespace, sus metodos estaticos en caso de ser un clase, todas sus propiedades y metodos en caso de ser
 * un objeto, etc.
 * Los namespaces no se pueden usar, solo los importo como, ya sea como default, como "* as (name) from ..." o desestructurando, que es
 * necesario para usar los tipos, interfaces, y otros de TS.
 * Al crear una clase y namespace con los mismos nombres, se juntan todos los datos que existen en las 2, en el caso de los types,
 * interfaces o otras declaraciones en el namespace, no podran ser accesibles mediante el "(class-namespace name).(type-name)", pero veo que
 * si mediante la desestructuracion al momento de importar el modulo, e.g: import { [type-name], [interface-name] } from './../...';.
 * Al exportar un namespace, se exporta todo lo que tiene dentro (clases, variables, types, interfaces, etc.). En cambio al exportar una
 * clase, se export la clase en si y sus metodos estaticos que tbm son accesibles mediante la desestructuracion.
 * 
 * Se usa import * as (name) from '../...'     en vez de import (default-name) from '../...'   para evitar activar la
 * opcion "allowSyntheticDefaultImports": true" en el tsconfig.json   (creo que todos los modulos descargados (por npm) usan ese tipo de
 * import, ya que yo tendria que activar la opcion en el tsconfig.json de mi proyecto)
 */

// declare module 'db' {
//    const hostApi: string;
//    const word: string;
//    function Say(): "jaja";
// }



// import names = require('nameds');


declare namespace Datos
{
   const hostApi: string;
   const word: string;
   function Say(): void;

   interface Ad
   {
   }

   class Db
   {
      a: string;
      b: string;
   }
}

export = Datos;



import {  } from 'http-proxy'; // aca la clase y el namespace se junta (se puede desestructurar todo lo que este en el namespace y tambien
// todos los metodos estaticos (y heredados) de la clase)