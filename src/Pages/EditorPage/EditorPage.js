import Form from '../../components/Form'
import TemplateA from '../../resume/TemplateA/TemplateA'
import TemplateB from '../../resume/TemplateA/TemplateB'

const EditorPage = () => {
  return (
    <div className='grid grid-cols-8'>
        <div className='col-span-2 '> <Form/> </div>

        <div className='col-span-6  mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl'> <TemplateA/> </div>

    </div>
  )
}

export default EditorPage