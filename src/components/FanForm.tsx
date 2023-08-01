import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseName, chooseEmail, chooseState, chooseTeam, chooseSport } from "../redux/slices/RootSlice"

interface sportFormProps {
  id?: string[];
  onClose: () => void;
}

const sportForm = ( props:sportFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseName(data.name));
      dispatch(chooseEmail(data.email));
      dispatch(chooseState(data.state));
      dispatch(chooseTeam(data.team));
      dispatch(chooseSport(data.sport));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <Input {...register('name')} name='name' placeholder="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input {...register('email')} name='email' placeholder="email" />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <Input {...register('state')} name='state' placeholder="state" />
        </div>
        <div>
          <label htmlFor="team">Phone Number</label>
          <Input {...register('team')} name='team' placeholder="team" />
        </div>
        <div>
          <label htmlFor="sport">Address</label>
          <Input {...register('sport')} name='sport' placeholder="sport" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default sportForm