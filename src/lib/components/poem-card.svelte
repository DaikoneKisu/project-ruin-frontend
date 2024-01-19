<script lang="ts">
  import * as Card from '$lib/components/ui/card'
  import PoemMoreInfoModal from '$lib/components/poem-more-info-modal.svelte'

  export let title: string
  export let author: string
  export let startDate: string
  export let endDate: string
  export let tags: string[]
  export let poem: string

  let poemData = { title, author, startDate, endDate, tags, poem }
</script>

<Card.Root class="mx-auto h-[268px] w-[400px]">
  <Card.Header>
    <Card.Title>{title}</Card.Title>
    <Card.Description>{author} - {startDate} - {endDate}</Card.Description>
  </Card.Header>
  <Card.Content>
    <p class="line-clamp-4">{poem}</p>
  </Card.Content>
  <Card.Footer>
    <PoemMoreInfoModal {...poemData} />
  </Card.Footer>
</Card.Root>
