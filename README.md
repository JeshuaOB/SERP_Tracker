<h1>SERP_Tracker</h1>
<h2>Contenido del repositorio</h2>
<p>El proyecto que contiene este repositorio consiste en un script desarrollado con JavaScript capaz de mostrar por consola la posición que mantiene un dominio específico para una consulta (keyword) dentro de las SERP de Google. Las posiciones se monitorizan sobre el top 100 de resultados, pudiendo indicar una lista de keywords diferentes para un mismo dominio desde un archivo XLSX externo. Los archivos principales que constituyen este proyecto son:</p>
<ul>
<li>tracker.js</li>
<li>trackingKW.xlsx</li>
</ul>
<h2>Indicaciones</h2>
<p>❗ Es necesario instalar la librería <i>Puppeteer</i> para poder trabajar con el navegador determinado.</p>
<p>❗ Para que el programa se ejecute correctamente, debemos introducir los datos correspondientes en el archivo XLSX respetando el orden establecido en las columnas.</p>
<p>❗ El valor utilizado como selector del elemento correspondiente del DOM del navegador puede ser modificado en cualquier momento, por lo que deberemos comprobar su veracidad cuando ejecutemos el programa. El selector empleado hasta la fecha para obtener cada uno de los dominios del top 100 es: "<i>.yuRUbf > a</i>".</p>
<h2>Estado</h2>
<p><strong>☑️ FINALIZADO</strong>, aunque el programa puede generar resultados erróneos. Tras realizar diversas pruebas, el origen de la problemática parece ser el rendimiento de la librería <i>Puppeteer</i>.</p>
<p>📅 Ultima modificación: <strong>25/08/2021</strong></p>
