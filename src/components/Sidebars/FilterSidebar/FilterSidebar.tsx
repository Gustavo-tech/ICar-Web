import React, { useState } from 'react'
import { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import Car from '../../../models/car'
import {
  Sidebar
} from './styles'

interface SidebarProps {
  cars: Car[];
  carsAux: Car[];
  setCars: (cars: Car[]) => void;
}

const FilterSidebar = ({ cars, carsAux, setCars }: SidebarProps) => {

  const [makers, setMakers] = useState<string[]>([])
  const [maker, setMaker] = useState('all')
  const [models, setModels] = useState<string[]>([])
  const [model, setModel] = useState('all')

  useEffect(() => {
    prepareMakers()
  }, [cars])

  function prepareMakers() {
    let newMakers: string[] = []

    for (const car of carsAux) {
      if (!newMakers.includes(car.maker)) {
        newMakers.push(car.maker)
      }
    }
    setMakers(newMakers)
  }

  function onMakerChange(maker: string) {
    setMaker(maker)
    if (maker === "all") {
      setCars(carsAux)
      return
    }

    let newCars = carsAux.filter(car => car.maker === maker);
    setCars(newCars)

    let newModels: string[] = []
    for (const car of newCars) {
      if (!newModels.includes(car.model)) {
        newModels.push(car.model)
      }
    }
    setModels(newModels)
  }

  function onModelChange(model: string) {
    if (model === "all") {
      let newCars = carsAux.filter(car => car.maker === maker)
      setCars(newCars)
      return
    }

    let newCars = cars.filter(car => car.maker === maker);
    setCars(newCars)
  }

  return (
    <Sidebar>
      <div style={{ padding: '5%' }}>
        <Form.Group>
          <Form.Label style={{ color: 'white' }}>Maker</Form.Label>
          <Form.Control
            value={maker}
            as="select"
            onChange={(e) => onMakerChange(e.target.value)}>
            <option value="all">All Makers</option>
            {makers.map((maker, index) => (
              <option key={index}>{maker}</option>
            ))}
          </Form.Control>
        </Form.Group>

        {maker !== "all" &&
          <Form.Group>
            <Form.Label style={{ color: 'white' }}>Model</Form.Label>
            <Form.Control as="select" onChange={(e) => onModelChange(e.target.value)}>
              <option value="all">All Models</option>
              {models.map((model, index) => (
                <option key={index}>{model}</option>
              ))}
            </Form.Control>
          </Form.Group>}

      </div>
    </Sidebar >
  )
}

export default FilterSidebar
