---
title: On "doing Yale right", a rehash
author: Daniel Zhao
blurb: Discusing the rehashed question of whether or not I did Yale right.
layout: blog
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

{% highlight r %}
library(httr)
knitr::opts_chunk$set(cache = T, message = F)

# function to simplify string concatenation
`%+%` <- function(a, b) paste0(a, b)

# Daniel's API key for Google Maps - please don't share
api_key <- "YOUR_KEY_HERE"

# obtains coordinates for one address term
get_coords <- function(addr, key) {
	base <- "https://maps.googleapis.com/maps/api/geocode/json?address="
	
	url <- base %+% gsub(" ", "+", addr) %+% "&key=" %+% key
	
	r <- GET(url)
	
	lat <- content(r)$results[[1]]$geometry$location$lat
	lng <- content(r)$results[[1]]$geometry$location$lng
	
	c(lat, lng)
}
{% endhighlight %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.