export async function asyncDelay(milliseconds: number = 0, verbose = false) {
  if (milliseconds <= 0) return;

  if (
    process.env.NODE_ENV !== "test" &&
    process.env.DISABLE_ASYNC_DELAYS !== "1"
  ) {
    if (verbose) {
      console.log(`Delaying for ${milliseconds / 1000}s`);
    }
    await new Promise((resolve) => setTimeout(resolve, milliseconds));
  }
}
