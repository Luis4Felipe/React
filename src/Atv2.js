import { React } from 'react';
import { Link } from 'react-router-dom';
import { Contador } from './Contador'


export default function Atv2() {
  return (
    <>
    <h1>Atv 2</h1>
    <Contador />
    <Link to="/">Voltar</Link>
    </>
  );
}

