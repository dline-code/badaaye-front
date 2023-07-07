import React from 'react'
import * as Popover from '@radix-ui/react-popover'
import styles from './styles.module.css'
import { FiLogOut, FiUser } from 'react-icons/fi'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/router'

const PopoverDemo = () => {
  const router = useRouter()
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className={styles.IconButton} aria-label="Update dimensions">
          <FiUser />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={styles.PopoverContent} sideOffset={5}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <p className={styles.Text} style={{ marginBottom: 20 }}></p>
            <button
              className={styles.Item}
              onClick={() => {
                deleteCookie('baadaye-token'), router.push('/login')
              }}
            >
              <FiLogOut />
              <span>Terminar sessão</span>
            </button>
          </div>
          <Popover.Arrow className={styles.PopoverArrow} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
export default PopoverDemo
