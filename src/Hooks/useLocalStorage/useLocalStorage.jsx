import { useEffect, useState } from 'react'

export default function useLocalStorage (itemName, initialValue) {
  const [item, setItem] = useState(initialValue)
  // Estado que "simula" la espera de datos y muestra un error en caso de existir
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // useEffec para simular la espera de datos proveniente de LocalStorage
  useEffect(() => {
    // Se define el tiempo de espera para la "simulación"
    setTimeout(() => {
      // Se agrega try catch para un posible error, además de alamacenar en la propiedad
      // catch, el "error" del estado
      try {
        let parseItem
        const localStorageItem = window.localStorage.getItem(itemName)

        if (!localStorageItem) {
          window.localStorage.setItem(itemName, JSON.stringify(initialValue))
          parseItem = initialValue
        } else {
          parseItem = JSON.parse(localStorageItem)
          setItem(parseItem)
        }
        // Se actualiza el valor del estado cuando existan o no datos en LocalStorage
        setLoading(false)
      } catch (error) {
        setLoading(false)
        // Se actualiza el valor del estado cuando exista un error
        setError(true)
      }
    }, 2000)
  })

  // Función que guarda datos en LS a partir de un array
  const saveItem = (newItemList) => {
    // El array que recibe lo convierte en String para poder guardar los datos en LS
    const newList = JSON.stringify(newItemList)
    window.localStorage.setItem(itemName, newList)

    /**
     * Se actualiza el estado con el array que recibe como argumento
     * No se envía a newList por que esta variable se encarga de convertir el array en String únicamente con el fin de guardar los datos en LS.
     */
    setItem(newItemList)
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}
