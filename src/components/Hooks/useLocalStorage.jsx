import { useState } from 'react'

export default function useLocalStorage (itemName, initialValue) {
  // Variable que guarda el valor parseado de los datos en LS (si existen) o es un array en su valor por defecto
  let parseItem
  const localStorageItem = window.localStorage.getItem(itemName)

  if (!localStorageItem) {
    window.localStorage.setItem(itemName, JSON.stringify(initialValue))
    parseItem = initialValue
  } else {
    parseItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parseItem)

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

  return [
    item,
    saveItem
  ]
}
