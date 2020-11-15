import React from "react"
import { Form, Field } from 'react-final-form'

type ProjectFormProps = {
  initialValues: any
  onSubmit: (values: {name: string}) => void
}

const ProjectForm = ({ initialValues, onSubmit }: ProjectFormProps) => {
  return (
    <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div>Put your form fields here. But for now, just click submit</div>
        <div>{JSON.stringify(initialValues)}</div>
        <Field name="name" component="input" placeholder="First Name" defaultValue={initialValues.name} />
        <button>Submit</button>
      </form>
    )}
  />
  )
}

export default ProjectForm
