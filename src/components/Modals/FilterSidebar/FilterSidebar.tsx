import React from 'react'
import { Form } from 'react-bootstrap'
import {
  Sidebar
} from './styles'

const FilterSidebar = () => {
  return (
    <Sidebar>
      <Form style={{ padding: '5%' }}>
        <Form.Group>
          <Form.Label style={{ color: 'white' }}>Maker</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form>
    </Sidebar>
  )
}

export default FilterSidebar
