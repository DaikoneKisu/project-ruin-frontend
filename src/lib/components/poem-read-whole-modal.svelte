<script lang="ts">
  import * as Dialog from '$lib/components/ui/dialog'
  import { Dialog as DialogPrimitive } from 'bits-ui'

  export let title: string
  export let author: string
  export let startDate: string
  export let endDate: string
  export let poem: string
</script>

<Dialog.Root>
  <Dialog.Trigger>Leer completo</Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header>
      <div>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description>{author} - {startDate} - {endDate}</Dialog.Description>
      </div>
    </Dialog.Header>
    <div class="flex flex-col">
      {#each poem.split('\n\n') as stanza}
        <div class="mb-4 last-of-type:mb-0">
          {#each stanza.split('\n') as verse}
            <p>{verse}</p>
          {/each}
        </div>
      {/each}
    </div>
    <Dialog.Footer>
      <DialogPrimitive.Close>Cerrar</DialogPrimitive.Close>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
