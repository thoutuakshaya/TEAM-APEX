"use client"

export default function ErrorBoundary({error}:{error:Error})
{return<div>error in {error.message}</div>}