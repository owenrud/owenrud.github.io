package main

import (
	"log"
	"net/http"
)

func portfolioHandler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/portfolio-details.html" {
		http.Error(w, "404 not found", http.StatusNotFound)
		return
	}
	if r.Method != "GET" {
		http.Error(w, "method is not supported", http.StatusNotFound)
		return
	}

}

func main() {
	fileServer := http.FileServer(http.Dir("./static"))
	http.Handle("/", fileServer)
	http.Handle("/portfolio-details.html", fileServer)

	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}
