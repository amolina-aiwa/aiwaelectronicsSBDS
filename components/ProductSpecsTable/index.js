import AccordionItem from '../AccordionItem'
import LaunchIcon from '@mui/icons-material/Launch';
import features from '../../content/features'
import IncludesItem from '../IncludesItem'
import includes from '../../content/includes'
import ProductCard from '../ProductCard'
import React from 'react';
import ChefHatIcon from '@mui/icons-material/Restaurant';

export default function ProductSpecsTable({ prod }) {
  const isCookProduct = prod.categories.includes(112) || prod.categories.includes(113) || prod.categories.includes(115);
  const prodFeatures = []
  features.forEach(e => {
    let prodFeature
    if (prod.features) {
      prodFeature = prod.features.find(f => f.id == e.id)
    }
    if (prodFeature) {
      prodFeatures.push({ ...prodFeature, name: e.name })
    }
  })
  const prodIncludes = []
  prod.includes.forEach(e => {
    prodIncludes.push(includes.find(f => e == f.id))
  })
  const downloadFile = () => {
    const fileUrlCook = 'http://www.aiwaelectronics.com.ar/photoserver/docs/recetarios/RecetarioYogurteras.pdf';
    const fileUrlFreidora = 'http://www.aiwaelectronics.com.ar/photoserver/docs/recetarios/RecetarioFreidoras.pdf';
    const fileUrlBatidora = 'http://www.aiwaelectronics.com.ar/photoserver/docs/recetarios/RecetarioBatidoras.pdf';

    if (prod.categories.includes(112)) {
      const fileName = 'RecetarioYogurteras.pdf';
      fetch(fileUrlCook)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.blob();
        })
        .then(blob => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', fileName);
          document.body.appendChild(link);
          link.click();
          link.parentNode.removeChild(link);
        })
        .catch(error => {
          console.error('Error al descargar el archivo:', error);
          // Redirigir al usuario al enlace del archivo en caso de que la descarga falle
          window.open(fileUrlCook, '_blank');
        });
    } else if (prod.categories.includes(113)) {
      const fileName = 'RecetarioFreidoras.pdf';
      fetch(fileUrlFreidora)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.blob();
        })
        .then(blob => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', fileName);
          document.body.appendChild(link);
          link.click();
          link.parentNode.removeChild(link);
        })
        .catch(error => {
          console.error('Error al descargar el archivo:', error);
          // Redirigir al usuario al enlace del archivo en caso de que la descarga falle
          window.open(fileUrlFreidora, '_blank');
        });
    } else if (prod.categories.includes(115)) {
      const fileName = 'RecetarioBatidoras.pdf';
      fetch(fileUrlBatidora)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.blob();
        })
        .then(blob => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', fileName);
          document.body.appendChild(link);
          link.click();
          link.parentNode.removeChild(link);
        })
        .catch(error => {
          console.error('Error al descargar el archivo:', error);
          // Redirigir al usuario al enlace del archivo en caso de que la descarga falle
          //window.open(fileUrlBatidora, '_blank');
        });
    }
  };
  return (
    <section id='prod-specs'>
      <AccordionItem classes='prod-specs-table' name='Especificaciones'>
        <div className='table-cell-container'>
          <div className='table-cell sku'>
            <div className='title'>{prod.sku}</div>
          </div>
          {prod.featuresSections && prod.featuresSections.map((e, i) => (
            <React.Fragment key={i}>
              <div className='table-cell sku'>
                <div className='title'>{e.title}</div>
              </div>
              {e.items.map((f, i) => (
                <div className='table-cell' key={i}>
                  <div className='title'>{f.name}</div>
                  <p className='desc'>{f.value}</p>
                </div>
              ))}
            </React.Fragment>
          ))}
          {!prod.featuresSections && prodFeatures.map((e, i) => (
            <div className='table-cell' key={i}>
              <div className='title'>{e.name}</div>
              <p className='desc'>{e.value}</p>
            </div>
          ))}
        </div>
      </AccordionItem>
      <AccordionItem classes='prod-specs-table' name='Incluye'>
        <div className='includes-container'>
          {prodIncludes.map((e, i) => <IncludesItem item={e} key={i} />)}
        </div>
        {prod.certNo && <p><small>*Número de certificado de Seguridad Eléctrica: {prod.certNo}</small></p>}
      </AccordionItem>
      <AccordionItem classes='prod-specs-table' name='Descargas' open={isCookProduct}>
        <div className='download-items'>
          {isCookProduct && (
            <button className='to-right recetario' onClick={downloadFile}>
              <span className='pc-only'>RECETARIO</span>
            </button>
          )}
          <a href={prod.downloads} target='_blank' rel="noreferrer">
            <LaunchIcon />
            {prod.noManual ? 'Accedé a las imágenes y ficha del producto' : 'Accedé al manual, imágenes y ficha del producto'}
          </a>
        </div>
      </AccordionItem>

      {prod.colors && prod.colors.length > 0 && (
        <AccordionItem classes='prod-specs-table variants' name='Colores' open>
          <div className="wrapper">
            {prod.colors.map((e, i) => (
              <ProductCard key={i} sku={e} showName showSku />
            ))}
          </div>
        </AccordionItem>
      )}
      {prod.variants && prod.variants.length > 0 && (
        <AccordionItem classes='prod-specs-table variants' name='Generaciones' open>
          <div className="wrapper">
            {prod.variants.map((e, i) => (
              <ProductCard key={i} sku={e} showName showSku showGen showTags showViewing={e == prod.sku} />
            ))}
          </div>
        </AccordionItem>
      )}
    </section>
  )
}