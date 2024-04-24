import React from 'react'

export default function Description() {
  return (
    <div className='p-2 bg-zinc-700 rounded'>
      <h1 className='text-center'>Описание</h1>
      <hr className='py-2 opacity-25 mt-2'/>
      <p className='text-center'>React - библиотека для веб и нативных пользовательских интерфейсов. Использует синтаксис JSX, создает интерфейс из компонентов.</p>
      <div className='flex justify-around text-center'>
        <div>
          <p>Плюсы</p>
          <ul className='text-left'>
            <li>1. Огромная эко-система (State-менеджеры, т.д.)</li>
            <li>2. Возможность писать интерфейсы под разные устройства (Expo (for Phone), Electron (for PC), Tauri (rust for PC))</li>
            <li>3. Понятность кода, простота в использовании</li>
          </ul>
        </div>
        <div>
          <p>Минусы</p>
          <ul>
            <li>1</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
