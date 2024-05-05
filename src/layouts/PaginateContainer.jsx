import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination'

function PaginateContainer({ paginate = {}, handleChangePage }) {
  const { hasPrevPage, hasNextPage, page, prevPage, nextPage, totalPages } =
    paginate

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button
            variant="ghost"
            disabled={!hasPrevPage}
            onClick={() => handleChangePage(prevPage)}
          >
            <ChevronLeftIcon className="mr-2 size-4" />
            Previous
          </Button>
        </PaginationItem>
        {hasPrevPage && prevPage - 1 >= 1 && (
          <PaginationItem>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleChangePage(prevPage - 1)}
            >
              <DotsHorizontalIcon className="size-4" />
            </Button>
          </PaginationItem>
        )}
        {prevPage && (
          <PaginationItem>
            <Button variant="ghost" onClick={() => handleChangePage(prevPage)}>
              {prevPage}
            </Button>
          </PaginationItem>
        )}
        <PaginationItem>
          <Button variant="outline">{page}</Button>
        </PaginationItem>
        {nextPage && (
          <PaginationItem>
            <Button variant="ghost" onClick={() => handleChangePage(nextPage)}>
              {nextPage}
            </Button>
          </PaginationItem>
        )}
        {hasNextPage && nextPage + 1 <= totalPages && (
          <PaginationItem>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleChangePage(nextPage + 1)}
            >
              <DotsHorizontalIcon className="size-4" />
            </Button>
          </PaginationItem>
        )}
        <PaginationItem>
          <Button
            variant="ghost"
            disabled={!hasNextPage}
            onClick={() => handleChangePage(nextPage)}
          >
            Next
            <ChevronRightIcon className="ml-2 size-4" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginateContainer
