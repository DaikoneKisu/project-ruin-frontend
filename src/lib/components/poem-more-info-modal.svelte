<script lang="ts">
  import * as Dialog from '$lib/components/ui/dialog'
  import PoemReadWholeModal from '$lib/components/poem-read-whole-modal.svelte'
  import { Dialog as DialogPrimitive } from 'bits-ui'

  export let title: string
  export let author: string
  export let startDate: string
  export let endDate: string
  export let tags: string[]
  export let poem: string

  let poemData = { title, author, startDate, endDate, poem }
</script>

<Dialog.Root>
  <Dialog.Trigger>Ver más información</Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.Description>{author} - {startDate} - {endDate}</Dialog.Description>
    </Dialog.Header>
    <div class="flex gap-2">
      {#if tags instanceof Array}
        {#each tags as tag}
          <span>{tag}</span>
        {/each}
      {/if}
    </div>
    <Dialog.Footer>
      <PoemReadWholeModal {...poemData} />
      <DialogPrimitive.Close>Cerrar</DialogPrimitive.Close>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
