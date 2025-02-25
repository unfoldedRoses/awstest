import { AlertCircle } from "lucide-react"
import { Button } from "./button"

interface ErrorMessageProps {
  title?: string
  message?: string
  onRetry?: () => void
}

export function ErrorMessage({
  title = "Something went wrong",
  message = "An error occurred while processing your request.",
  onRetry
}: ErrorMessageProps) {
  return (
    <div className="rounded-lg border border-destructive/50 p-4">
      <div className="flex items-center gap-2 text-destructive">
        <AlertCircle className="h-5 w-5" />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{message}</p>
      {onRetry && (
        <Button
          variant="outline"
          size="sm"
          className="mt-4"
          onClick={onRetry}
        >
          Try again
        </Button>
      )}
    </div>
  )
}